#!/bin/bash
set -e
source /var/www/envs/twweb/bin/activate
export DJANGO_SETTINGS_MODULE=inthe_am.celery_settings
exec /var/www/envs/twweb/bin/celery -A inthe_am.taskmanager.celery worker -l info
