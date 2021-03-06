from __future__ import absolute_import

from fnmatch import fnmatch as glob
import logging
import re
import shlex
import uuid

from celery import shared_task
from celery.signals import setup_logging
from django.conf import settings
from django.utils.timezone import now
from django_mailbox.models import Message

from .context_managers import git_checkpoint


logger = logging.getLogger(__name__)


@setup_logging.connect
def project_setup_logging(loglevel, logfile, format, colorize, **kwargs):
    import logging.config
    from django.conf import settings
    logging.config.dictConfigClass(settings.LOGGING).configure()


@shared_task(
    bind=True,
    soft_time_limit=30,
    time_limit=45,
    default_retry_delay=60,
    max_retries=10,  # We should always stop at two, anyway
    ignore_result=True,
)
def sync_repository(self, store_id, debounce_id=None):
    from .models import TaskStore
    store = TaskStore.objects.get(pk=store_id)
    try:
        store.sync(
            async=False,
            function='tasks.sync_repository',
            args=(store_id, ),
            kwargs={'debounce_id': debounce_id},
        )
    except Exception as e:
        if self.request.retries >= 2:
            store.log_error(
                "An unexpected error was encountered while synchronizing "
                "your tasks with the taskd server. Synchronization has been "
                "temporarily disabled for your account, and an administrator "
                "has been notified."
            )
            store.sync_enabled = False
            store.save()
        else:
            raise self.retry(exc=e)


@shared_task(
    bind=True,
    ignore_result=True,
)
def process_email_message(self, message_id):
    from .models import TaskAttachment, TaskStore

    with open('/tmp/out.log', 'w') as out:
        import json
        out.write(
            json.dumps(settings.LOGGING, indent=4)
        )
        out.write(__name__)

    def get_secret_id_and_args(address):
        inbox_id = address[0:36]
        args = []

        arg_string = address[36:]
        for arg in re.split('__|\+', arg_string):
            if not arg:
                continue
            if '=' in arg:
                args.append(
                    '%s:"%s"' % tuple(arg.split('='))
                )
            else:
                args.append('+%s' % arg)

        return inbox_id, args

    message = Message.objects.get(pk=message_id)
    message.read = now()
    message.save()

    store = None
    additional_args = []
    # Check for matching To: addresses.
    for address in message.to_addresses:
        try:
            inbox_id, additional_args = get_secret_id_and_args(
                address.split('@')[0]
            )

            store = TaskStore.objects.get(
                secret_id=inbox_id
            )
            break
        except (TaskStore.DoesNotExist, IndexError):
            pass

    # Check for 'Received' headers matching a known e-mail address.
    if store is None:
        email_regex = re.compile(r'([0-9a-fA-F-]{36}@inthe.am)')
        all_received_headers = message.get_email_object().get_all('Received')
        for header in all_received_headers:
            matched_email = email_regex.search(header)
            if matched_email:
                address = matched_email.group(1)
                try:
                    inbox_id, additional_args = get_secret_id_and_args(
                        address.split('@')[0]
                    )

                    store = TaskStore.objects.get(
                        secret_id=inbox_id
                    )
                    break
                except (TaskStore.DoesNotExist, IndexError):
                    pass

    if store is None:
        logger.error(
            "Could not find task store for e-mail message (ID %s) addressed "
            "to %s",
            message.pk,
            message.to_addresses
        )
        return

    allowed = False
    for address in store.email_whitelist.split('\n'):
        if glob(message.from_address[0], address):
            allowed = True

    if not allowed:
        log_args = (
            "Incoming task creation e-mail (ID: %s) from '%s' "
            "does not match email whitelist and was ignored." % (
                message.pk,
                message.from_address[0]
            ),
        )
        logger.info(*log_args)
        store.log_message(*log_args)
        return

    if (
        not message.subject
        or message.subject.lower() in ['add', 'create', 'new'],
    ):
        task_id = str(uuid.uuid4())
        with git_checkpoint(store, 'Incoming E-mail'):
            task_args = [
                'add',
                'uuid:%s' % task_id,
                'intheamoriginalemailsubject:"%s"' % message.subject,
                'intheamoriginalemailid:%s' % message.pk,
            ] + additional_args + shlex.split(
                message.text.split('\n\n')[0]  # Only use text up to the first
                                               # blank line.
            )
            stdout, stderr = store.client._execute_safe(*task_args)
            task = store.client.get_task(uuid=task_id)[1]

            attachment_urls_raw = task.get('intheamattachments')
            if not attachment_urls_raw:
                attachment_urls = []
            else:
                attachment_urls = attachment_urls_raw.split('|')

            for record in message.attachments.all():
                attachment = record.document
                if attachment.file.size > settings.FILE_UPLOAD_MAXIMUM_BYTES:
                    logger.info(
                        "File %s too large (%s bytes).",
                        attachment.file.name,
                        attachment.file.size,
                    )
                    store.log_message(
                        "Attachments must be smaller than %s "
                        "bytes to be saved to a task, but the "
                        "attachment %s received for task ID %s "
                        "is %s bytes in size and was not saved "
                        "as a result." % (
                            settings.FILE_UPLOAD_MAXIMUM_BYTES,
                            attachment.file.name,
                            task_id,
                            attachment.file.size,
                        )
                    )
                    attachment.delete()
                    continue

                document = TaskAttachment.objects.create(
                    store=store,
                    task_id=task_id,
                    name=record.get_filename(),
                    size=attachment.file.size,
                )
                document.document.save(
                    record.get_filename(),
                    attachment.file,
                )
                attachment_urls.append(
                    document.document.url
                )
                store.client.task_annotate(
                    task, 'Attached File: %s' % document.document.url
                )

            if attachment_urls:
                task['intheamattachments'] = ' '.join(attachment_urls)
                store.client.task_update(task)

        log_args = (
            "Added task %s via e-mail %s from %s." % (
                task_id,
                message.pk,
                message.from_address[0]
            ),
        )
        logger.info(*log_args)
        store.log_message(*log_args)
    else:
        log_args = (
            "Unable to process e-mail %s from %s; unknown subject '%s'" % (
                message.pk,
                message.from_address[0],
                message.subject,
            ),
        )
        logger.info(*log_args)
        store.log_message(*log_args)
