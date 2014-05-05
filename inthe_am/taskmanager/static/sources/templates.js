this["Ember"] = this["Ember"] || {};
this["Ember"]["TEMPLATES"] = this["Ember"]["TEMPLATES"] || {};

this["Ember"]["TEMPLATES"]["about"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<div class=\"row standalone\">\n    <h1>Inthe.AM</h1>\n    <div class=\"medium-12\">\n        <p>\n            Sometimes you need to access your \n            <a href=\"http://taskwarrior.org/\">taskwarrior</a>\n            tasks when you're not\n            nearby your keyboard; that is where Inthe.AM can help.\n            <a href=\"#\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "login", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                Log In with Google to get started.\n            </a>\n        </p>\n    </div>\n    <div class=\"medium-12\">\n        <p>\n            <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  options = {hash:{
    'src': ("urls.web_ui")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" />\n        </p>\n    </div>\n    <div class=\"medium-12\">\n        <p>\n            Inthe.AM provides you with a modern web interface that you can\n            use for accessing your Taskwarrior tasks from any browser\n            connected to the internet &mdash; even your phone.\n        </p>\n        <h2>Features</h2>\n        <ul id='features'>\n            <li>\n                <span class='headline'>Synchronization with Taskwarrior</span>:\n                An automatically-configured synchronization server that\n                you can set up your local Taskwarrior client to synchronize\n                with (requires Taskwarrior 2.3 or later).\n            </li>\n            <li>\n                <span class='headline'>Responsive, mobile-ready web UI</span>:\n                A modern web interface that you can use for accessing\n                your tasks from either a desktop browser or your phone\n                &mdash; there's even a web-app mode usable for those\n                of you with IOS devices.\n            </li>\n            <li>\n                <span class='headline'>Add tasks by SMS</span>:\n                Quickly adding a task to your task list is as easy as sending\n                an SMS message.\n            </li>\n            <li>\n                <span class='headline'>Taskwarrior color scheme support</span>:\n                Display your tasks using any of the built-in Taskwarrior\n                color schemes.  The colors displayed will match those shown\n                in your terminal!\n            </li>\n            <li>\n                <span class='headline'>REST API</span>:\n                Display your latest task entry on your Pebble using\n                Wire-up <em>your</em> applications to create,\n                modify, or complete your tasks programmatically using\n                Inthe.AM's REST API.\n            </li>\n            <li>\n                <span class='headline'>Pebble Cards Integration</span>:\n                Display your latest task entry on your Pebble using\n                Inthe.AM's Pebble Cards integration.\n            </li>\n        </ul>\n        <h2>Open Source</h2>\n        <p>\n            Inthe.AM is an open-source application relying upon open-source\n            libraries.  The features you want are just a pull-request\n            or a <a href=\"https://github.com/coddingtonbear/inthe.am/issues?page=1&state=open\">bug-report</a> away!\n        </p>\n    </div>\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "footer", options) : helperMissing.call(depth0, "partial", "footer", options))));
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["activityLog"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "msg.error", {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    <td class=\"last_seen\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.fromnow || depth0.fromnow),stack1 ? stack1.call(depth0, "msg.last_seen", options) : helperMissing.call(depth0, "fromnow", "msg.last_seen", options))));
  data.buffer.push("</td>\n                    <td class=\"created\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.fromnow || depth0.fromnow),stack1 ? stack1.call(depth0, "msg.created", options) : helperMissing.call(depth0, "fromnow", "msg.created", options))));
  data.buffer.push("</td>\n                    <td class=\"message\">\n                        ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "msg.message", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                        ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "msg.task_uuids", {hash:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                    </td>\n                    <td class=\"count\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "msg.count", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</td>\n                </tr>\n            ");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("\n                    <tr class=\"error\">\n                ");
  }

function program4(depth0,data) {
  
  
  data.buffer.push("\n                    <tr class=\"info\">\n                ");
  }

function program6(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n                            <ul>\n                                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "task_uuid", "in", "msg.task_uuids", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </li>\n                        ");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n                                    <li>\n                                        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "task", "task_uuid", options) : helperMissing.call(depth0, "link-to", "task", "task_uuid", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                                    </li>\n                                ");
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                                            <i class=\"fa fa-arrow-circle-o-right\">\n                                                ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "task_uuid", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                            </i>\n                                        ");
  return buffer;
  }

  data.buffer.push("<div class=\"row standalone\">\n    <h2>Activity Log</h2>\n\n    <table class=\"log\">\n        <thead>\n            <tr>\n                <th>Last Seen</th>\n                <th>First Seen</th>\n                <th>Message</th>\n                <th>Count</th>\n            </tr>\n        </thead>\n        <tbody>\n            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "msg", "in", "controller", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </tbody>\n    </table>\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "footer", options) : helperMissing.call(depth0, "partial", "footer", options))));
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["addToHomeScreen"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"row standalone add-to-home-screen\">\n    <h1>Install Inthe.AM<br />on your device</h1>\n    <p>\n        For the best experience, install Inthe.AM\n        on your device by adding this to your home screen.\n    </p>\n    <p class=\"input-note\">\n        Tap the icon below to \"Add to Home Screen\".\n    </p>\n    <p>\n        <i class=\"fa fa-arrow-down\"></i>\n    </p>\n</div>\n");
  
});

this["Ember"]["TEMPLATES"]["annotation_form"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"row\">\n    <div class=\"medium-12 columns\">\n        <h2>Add Annotation</h2>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"medium-12 columns\">\n        ");
  hashContexts = {'id': depth0};
  hashTypes = {'id': "STRING"};
  options = {hash:{
    'id': ("new_annotation_body")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.textarea || depth0.textarea),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"medium-12 columns\">\n        <button class=\"secondary-button\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n            <i class=\"fa fa-save\">Save</i>\n        </button>\n    </div>\n</div>\n");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["apiDocs"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<div class=\"row standalone\">\n    <h2>Accessing, creating, or modifying your tasks via the API</h2>\n\n    <p>\n        Using your API key in an \"<code>Authorization</code>\" header;\n        for an example:\n    </p>\n\n    <code>\n    <pre>\n        Authorization: ApiKey ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controllers.application.user.username", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(":");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controllers.application.user.api_key", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    </pre>\n    </code>\n\n    <h3>Task Format</h3>\n\n    <p>\n        Each task has the following fields:\n    </p>\n    <table class=\"pure-table pure-table-horizontal\">\n        <thead>\n            <tr>\n                <th>Field</th>\n                <th>Description</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr>\n                <td><code>id</code></td>\n                <td>\n                    The short ID number of a task.\n                    These are not stable and are generally used when\n                    using the Taskwarrior command-line client for ease-of\n                    entry; if a task is completed, all\n                    tasks may receive a new ID number.\n                </td>\n            </tr>\n            <tr>\n                <td><code>uuid</code></td>\n                <td>\n                    The unique ID number of a task.\n                    These are stable and can be used in situations where\n                    you may want to retrieve a task after it has been completed.\n                    <br />\n                    <strong>\n                        This is the primary key of the task and is a\n                        read-only property.\n                    </strong>.\n                </td>\n            </tr>\n            <tr>\n                <td><code>resource_uri</code></td>\n                <td>\n                    This is the URL at which this task can be retrieved\n                    again in the future.  It will match the URL you used\n                    for fetching this task unless you fetched this task\n                    from a listing endpoint.\n                    <strong>\n                        This is a read-only property.\n                    </strong>\n                </td>\n            </tr>\n            <tr>\n                <td><code>status</code></td>\n                <td>\n                    One of <code>pending</code>, <code>completed</code>,\n                    <code>waiting</code>, or <code>deleted</code>.\n                    New tasks default to <code>pending</code>.\n                </td>\n            </tr>\n            <tr>\n                <td><code>urgency</code></td>\n                <td>\n                    A float representing the current calculated urgency level\n                    of a task.  This is generated internally by taskwarrior\n                    and thus is a <strong>read-only property</strong>.\n                </td>\n            </tr>\n            <tr>\n                <td><code>description</code></td>\n                <td>\n                    The title of this task.\n                    <strong>This property is required.</strong>\n                </td>\n            </tr>\n            <tr>\n                <td><code>priority</code></td>\n                <td>\n                    One of <code>H</code>,\n                    <code>M</code>, or <code>L</code>.\n                </td>\n            </tr>\n            <tr>\n                <td><code>due</code></td>\n                <td>\n                    A date string representing this task's due date and time.\n                </td>\n            </tr>\n            <tr>\n                <td><code>entry</code></td>\n                <td>\n                    A date string representing this task's entry date and time.\n                </td>\n            </tr>\n            <tr>\n                <td><code>modified</code></td>\n                <td>\n                    A date string representing this task's modified date and time.\n                </td>\n            </tr>\n            <tr>\n                <td><code>start</code></td>\n                <td>\n                    A date string representing the date and time this task was started.\n                </td>\n            </tr>\n            <tr>\n                <td><code>wait</code></td>\n                <td>\n                    A date string representing the date and time to wait\n                    before listing this task in the pending task list.\n                </td>\n            </tr>\n            <tr>\n                <td><code>scheduled</code></td>\n                <td>\n                    A date string representing the date and time at which\n                    work on this task is scheduled.\n                </td>\n            </tr>\n            <tr>\n                <td><code>depends</code></td>\n                <td>\n                    A comma-separated list of task UUIDs upon which\n                    this task depends.\n                </td>\n            </tr>\n            <tr>\n                <td><code>annotations</code></td>\n                <td>\n                    A list of annotations added to this task.\n\n                    <em>\n                        Note: this is returned from Taskwarrior as a dictionary\n                        having keys <code>entry</code> (the time at which this\n                        annotation was added) and <code>description</code> (the\n                        annotation text itself), but you are also able update or\n                        create task entries by supplying simply a list of string\n                        annotations you would like your updated or created task\n                        to have.\n                    </em>\n                </td>\n            </tr>\n            <tr>\n                <td><code>tags</code></td>\n                <td>\n                    A list of tags assigned to this task.\n                </td>\n            </tr>\n            <tr>\n                <td><code>imask</code></td>\n                <td>\n                    An integer representing this task's <code>imask</code>.  This\n                    is a <strong>read-only property</strong> used internally\n                    by Taskwarrior for recurring tasks.\n                </td>\n            </tr>\n        </tbody>\n    </table>\n\n    <p>\n        Example JSON formatted task:\n    </p>\n\n    <code>\n    <pre>\n        {\n            \"annotations\": [\n                {\"description\": \"Chapter 1\", \"entry\": \"Mon, 3 Feb 2014 01:52:51 +0000\"},\n                {\"description\": \"Chapter 2\", \"entry\": \"Mon, 3 Feb 2014 01:52:53 +0000\"}\n            ],\n            \"depends\": null,\n            \"description\": \"The wheels on the bus go round and round\",\n            \"due\": null,\n            \"entry\": \"Mon, 3 Feb 2014 01:52:51 +0000\",\n            \"id\": 1,\n            \"imask\": null,\n            \"modified\": \"Mon, 3 Feb 2014 01:52:52 +0000\",\n            \"priority\": null,\n            \"project\": \"Alphaville\",\n            \"resource_uri\": \"/api/v1/task/b8d05cfe-8464-44ef-9d99-eb3e7809d337/\",\n            \"scheduled\": null,\n            \"start\": null,\n            \"status\": \"waiting\",\n            \"tags\": [\"very_unimportant\", \"delayed\"],\n            \"urgency\": -0.1,\n            \"uuid\": \"b8d05cfe-8464-44ef-9d99-eb3e7809d337\",\n            \"wait\": \"Thu, 6 Feb 2014 01:52:51 +0000\"\n        }\n    </pre>\n    </code>\n\n    <p>\n        <em>\n            Note that although the displayed task's datetime fields are\n            encoded using RFC 2822 date strings in UTC,\n            your supplied date strings will be parsed using\n            <a href=\"http://labix.org/python-dateutil#head-c0e81a473b647dfa787dc11e8c69557ec2c3ecd2\">dateutil's parse method</a>,\n            so you can provide date strings in whatever format is most convenient for you,\n            but ISO 8601 or RFC 2822 formatted dates are strongly recommended.\n            <strong>\n                Be sure to specify a time zone or offset in your date string.\n            </strong>\n        </em>\n    </p>\n\n    <h3>Endpoints</h3>\n\n    <p>\n        All below endpoints share the following list of common response\n        codes unless otherwise elaborated upon below:\n    </p>\n\n    <ul>\n        <li>\n            <strong>200</strong>: Success.\n        </li>\n        <li>\n            <strong>201</strong>: Successfully created.\n        </li>\n        <li>\n            <strong>400</strong>: Your request was malformed, or requested\n            an impossible operation.  A description of the problem will\n            be included in the response.\n        </li>\n        <li>\n            <strong>401</strong>: Your request did not include proper\n            authentication headers.  \n            Make sure that you've properly sent the Authorization\n            header described above.\n        </li>\n        <li>\n            <strong>403</strong>: Your request was not properly authenticated,\n            or you have requested an entity for which you do not have\n            permission. Make sure that you've properly sent the Authorization\n            header described above.\n        </li>\n        <li>\n            <strong>404</strong>: The entity you have requested does not exist.\n        </li>\n        <li>\n            <strong>405</strong>: The request method used is not allowed\n            for the endpoint you are sending it to.  Please review\n            the below documentation and alter your request to use an acceptable\n            method.\n        </li>\n        <li>\n            <strong>409</strong>: Your repository is currently locked.\n            During operations against your task list, an exclusive lock\n            is obtained to prevent multiple processes from writing to your\n            task list simultaneously.  If you receive this error continuously,\n            see \"Manage Lockfile\" below.\n        </li>\n        <li>\n            <strong>500</strong>: A server error occurred while processing\n            your request.  An error was logged, and the administrators\n            of this site have been notified.  Please try your request again\n            later.\n        </li>\n    </ul>\n\n    <h4>Pending Tasks</h4>\n\n    <h5>Task List: <code>https://inthe.am/api/v1/task/</code></h5>\n\n    <h6>Acceptable Request Methods</h6>\n    <ul>\n        <li><strong>GET</strong>: List all pending tasks.</li>\n        <li><strong>POST</strong>: Given a task payload, create a new task.</li>\n    </ul>\n\n    <h5>Task Details: <code>https://inthe.am/api/v1/task/<b>&lt;TASK UUID&gt;</b>/</code></h5>\n\n    <h6>Acceptable Request Methods</h6>\n    <ul>\n        <li><strong>GET</strong>: Get task details.</li>\n        <li><strong>PUT</strong>: Given a task payload, update a task's details.</li>\n        <li>\n            <strong>DELETE</strong>: Mark an existing task as deleted.\n            Perhaps surprisingly, this does not mark a task deleted;\n            to mark a Taskwarrior task as deleted, see 'Delete Task'.\n        </li>\n    </ul>\n\n    <h5>Delete a Task: <code>https://inthe.am/api/v1/task/<b>&lt;TASK UUID&gt;</b>/delete/</code></h5>\n\n    <h6>Acceptable Request Methods</h6>\n    <ul>\n        <li>\n            <strong>POST</strong>: Mark an existing task as deleted.\n            Note that although using the <strong>DELETE</strong> method on the\n            Task Details endpoint may seem to be more intuitive, it is far\n            more common for one to mark a task as completed than deleted.  Think\n            of the Task List and Task Details endpoints as being listings of\n            only pending tasks, and that by issuing a <strong>DELETE</strong>\n            request you're removing it from your pending task list (and \n            moving it to your completed task list).\n        </li>\n    </ul>\n\n    <h5>Start a Task: <code>https://inthe.am/api/v1/task/<b>&lt;TASK UUID&gt;</b>/start/</code></h5>\n\n    <h6>Acceptable Request Methods</h6>\n    <ul>\n        <li><strong>POST</strong>: Mark an existing task as started.</li>\n    </ul>\n\n    <h5>Stop a Task: <code>https://inthe.am/api/v1/task/<b>&lt;TASK UUID&gt;</b>/stop/</code></h5>\n\n    <h6>Acceptable Request Methods</h6>\n    <ul>\n        <li><strong>POST</strong>: Mark an existing started task as stopped.</li>\n    </ul>\n\n    <h4>Completed Tasks</h4>\n\n    <h5>Completed Task List: <code>https://inthe.am/api/v1/completedtask/</code></h5>\n\n    <h6>Acceptable Request Methods</h6>\n    <ul>\n        <li>\n            <strong>GET</strong>:\n            List completed tasks.\n        </li>\n    </ul>\n\n    <h5>Completed Task Detail: <code>https://inthe.am/api/v1/completedtask/<b>&lt;TASK UUID&gt;</b>/</code></h5>\n\n    <h6>Acceptable Request Methods</h6>\n    <ul>\n        <li>\n            <strong>GET</strong>:\n            Get completed task details.\n        </li>\n    </ul>\n\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "footer", options) : helperMissing.call(depth0, "partial", "footer", options))));
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n        <section class=\"top-bar-section\">\n            <!-- Right Nav Section -->\n            <ul class=\"right\">\n                <li>\n                    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "activityLog", options) : helperMissing.call(depth0, "link-to", "activityLog", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                </li>\n                <li>\n                    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "configure", options) : helperMissing.call(depth0, "link-to", "configure", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                </li>\n                <li>\n                    <a href=\"#\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "logout", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class=\"fa fa-sign-out\">Log Out</i></a>\n                </li>\n            </ul>\n\n            <!-- Left Nav Section -->\n            <ul class=\"left\">\n                <!-- Mobile-only -->\n                <li class=\"mobile-only\">\n                    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "mobileTasks", options) : helperMissing.call(depth0, "link-to", "mobileTasks", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                </li>\n                <li class=\"mobile-only\">\n                    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "createTask", options) : helperMissing.call(depth0, "link-to", "createTask", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                </li>\n\n                <!-- Desktop-only -->\n                <li class=\"desktop-only\">\n                    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "tasks", options) : helperMissing.call(depth0, "link-to", "tasks", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                </li>\n                <li class=\"desktop-only\">\n                    <a href=\"#\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "create_task", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class=\"fa fa-pencil-square-o\">New</i></a>\n                </li>\n\n                ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.unless.call(depth0, "taskUpdateStreamConnected", {hash:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n            </ul>\n        </section>\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("<i class=\"fa fa-list\">Log</i>");
  }

function program4(depth0,data) {
  
  
  data.buffer.push("<i class=\"fa fa-wrench\">Configuration</i>");
  }

function program6(depth0,data) {
  
  
  data.buffer.push("<i class=\"fa fa-list-alt\">Tasks</i>");
  }

function program8(depth0,data) {
  
  
  data.buffer.push("<i class=\"fa fa-pencil-square-o\">New</i>");
  }

function program10(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                    <li id=\"refresh-link\">\n                        <a href=\"#\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "refresh", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class=\"fa fa-refresh\"></i></a>\n                    </li>\n                ");
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n        <section class=\"top-bar-section\">\n            <ul class=\"left\">\n                <li>\n                    <a href=\"#\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "login", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class=\"fa fa-sign-in\">Log In with Google</i></a>\n                </li>\n            </ul>\n        </section>\n    ");
  return buffer;
  }

  data.buffer.push("<nav class=\"top-bar\" data-topbar>\n    <ul class=\"title-area\">\n        <li class=\"name\">\n            <h1><a href=\"#\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "home", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><img src=\"/static/logo.png\" />Inthe.AM</a></h1>\n        </li>\n    </ul>\n\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.user.name", {hash:{},inverse:self.program(12, program12, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</nav>\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.outlet || depth0.outlet),stack1 ? stack1.call(depth0, "modal", options) : helperMissing.call(depth0, "outlet", "modal", options))));
  data.buffer.push("\n");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["configure"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n        <div class=\"block error\">\n            <p>\n                Inthe.AM encountered a problem synchronizing your tasks with\n                the Taskd sever your account is using, and synchronization has\n                been disabled for your account.\n            </p>\n            <p>\n                This can occur if either your Taskd synchronization settings\n                below are incorrect, or if the server you are synchronizing\n                with encountered a temporary outage.\n            </p>\n            <p>\n                Please take a moment to verify that you have entered the\n                correct settings, then re-enable synchronization.\n            </p>\n            <a href=\"\" class=\"button radius alert\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "enable_sync", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                Re-enable Synchronization\n            </a>\n        </div>\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n                    <div class=\"row\">\n                        <div class=\"large-12 columns\">\n                            <h3>Streaming Ticket Updates</h3>\n                            ");
  hashContexts = {'value': depth0,'optionValuePath': depth0,'optionLabelPath': depth0,'content': depth0,'id': depth0};
  hashTypes = {'value': "ID",'optionValuePath': "STRING",'optionLabelPath': "STRING",'content': "ID",'id': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'value': ("taskUpdateStreamEnabledUI"),
    'optionValuePath': ("content.short"),
    'optionLabelPath': ("content.long"),
    'content': ("taskUpdateStringSettings"),
    'id': ("id_update_stream")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                            <p class=\"input-note\">\n                                Task updates are streamed directly to your browser\n                                by default, but can be disabled if you are trying\n                                to reduce the amount of data used, or the amount\n                                battery consumed.\n                            </p>\n                            <p class=\"input-note\">\n                                <strong>Note:</strong> Your page will refresh upon\n                                saving this change.\n                            </p>\n                            <a href=\"\" class=\"button radius\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save_streaming", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Save Settings</a>\n                        </div>\n                    </div>\n                ");
  return buffer;
  }

function program5(depth0,data) {
  
  
  data.buffer.push("API Documentation");
  }

function program7(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                            <div class=\"block warning\">\n                                <p>\n                                    For your security, your feed is disabled\n                                    by default.  Although your feed's URL is unique\n                                    and randomly generated, no authentication is used\n                                    to improve compatibility with RSS feed readers.\n                                    <a href=\"\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save_feed", true, {hash:{},contexts:[depth0,depth0],types:["STRING","BOOLEAN"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Enable your RSS Feed</a>.\n                                </p>\n                            </div>\n                        ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                            <table class=\"pure-table pure-table-horizontal\">\n                                <tr>\n                                    <th>\n                                        Feed URL\n                                    </th>\n                                    <td>\n                                        https://inthe.am");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controllers.application.urls.feed_url", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                    </td>\n                                </tr>\n                            </table>\n                        ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                            <div class=\"block warning\">\n                                <p>\n                                    For your security, your Pebble Cards URL is disabled\n                                    by default.  Although your Pebble Cards URL is unique\n                                    and randomly generated, due to limitations in Pebble\n                                    Cards, no authentication is used.\n                                    <a href=\"\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save_pebble_cards", true, {hash:{},contexts:[depth0,depth0],types:["STRING","BOOLEAN"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Enable your Pebble Cards URL</a>.\n                                </p>\n                            </div>\n                        ");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                            <table class=\"pure-table pure-table-horizontal\">\n                                <tr>\n                                    <th>\n                                        Pebble Cards URL\n                                    </th>\n                                    <td>\n                                        https://inthe.am");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controllers.application.urls.pebble_card_url", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                    </td>\n                                </tr>\n                            </table>\n                        ");
  return buffer;
  }

function program15(depth0,data) {
  
  
  data.buffer.push("\n                            <div class=\"block warning\">\n                                <p>\n                                    For your security, the ability to send task messages via\n                                    SMS is currently disabled for your account since you\n                                    have not yet entered your Twilio auth token.\n                                </p>\n                                <p>\n                                    This token is necessary for verifying that incoming messages\n                                    were sent to Inthe.AM by Twilio from your account.\n                                </p>\n                                <p>\n                                    Enable SMS access by filling in the below information.\n                                </p>\n                            </div>\n                        ");
  }

function program17(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                            <table class=\"pure-table pure-table-horizontal\">\n                                <tr>\n                                    <th>\n                                        Twilio Messaging Request URL <strong>(POST)</strong>\n                                    </th>\n                                    <td>\n                                        https://inthe.am");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controllers.application.urls.sms_url", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                    </td>\n                                </tr>\n                            </table>\n                        ");
  return buffer;
  }

  data.buffer.push("<div class=\"row standalone\">\n    <h2>Configuration &amp; Settings</h2>\n    <div id=\"settings_alerts\">\n    </div>\n\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.unless.call(depth0, "controllers.application.user.sync_enabled", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    <dl class=\"accordion\" data-accordion>\n        <dd>\n            <a href=\"#custom_taskd\">Synchronization Settings</a>\n            <div id=\"custom_taskd\" class=\"content\">\n                <div class=\"row\">\n                    <div class=\"large-12 columns\">\n                        <p>\n                            Inthe.AM provides a built-in Task Server for you\n                            to synchronize your tasks with; follow the\n                            instructions in \"Use the built-in Task Server\"\n                            for setting up your local taskwarrior client to\n                            synchronize with Inthe.AM.\n                            But, should you have an outside Task Server\n                            that you already synchronize with, \n                            you can also configure Inthe.AM to synchronize\n                            with your server in \"Use a custom Task Server\".\n                        </p>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"large-12 columns\">\n                        <h3 id=\"built_in_task_server\">Use the built-in Task Server</h3>\n                        <table class=\"pure-table pure-table-horizontal\">\n                            <tr>\n                                <th>\n                                    Your Certificate\n                                </th>\n                                <td>\n                                    <a ");
  hashContexts = {'href': depth0};
  hashTypes = {'href': "ID"};
  options = {hash:{
    'href': ("controllers.application.urls.my_certificate")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">private.certificate.pem</a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <th>\n                                   Your Key \n                                </th>\n                                <td>\n                                    <a ");
  hashContexts = {'href': depth0};
  hashTypes = {'href': "ID"};
  options = {hash:{
    'href': ("controllers.application.urls.my_key")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">private.key.pem</a>\n                                </td>\n                            </tr>\n                        </table>\n                        \n                        <p>\n                            Add the following settings to your Taskwarrior configuration file (<code>~/.taskrc</code>).\n                        </p>\n\n                        <code class=\"para\">taskd.certificate=/path/to/<a ");
  hashContexts = {'href': depth0};
  hashTypes = {'href': "ID"};
  options = {hash:{
    'href': ("controllers.application.urls.my_certificate")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">private.certificate.pem</a><br />\n                            taskd.key=/path/to/<a ");
  hashContexts = {'href': depth0};
  hashTypes = {'href': "ID"};
  options = {hash:{
    'href': ("controllers.application.urls.my_key")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">private.key.pem</a><br />\n                            taskd.trust=yes<br />\n                            taskd.server=");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controllers.application.user.taskd_server", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("<br />\n                            taskd.credentials=");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controllers.application.user.taskd_credentials", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("<br />\n                        </code>\n\n                        <p>\n                            Synchronizing for the first time is as easy as running <code>task sync init</code> \n                            &mdash; running that command will instruct Taskwarrior to send all of its tasks to Inthe.AM.\n                            After the initial synchronization, you can synchronize with Inthe.AM by running <code>task sync</code>.\n                        </p>\n                        <p>\n                            If you are using a modern browser other than Internet Explorer, \n                            entries displayed on Inthe.AM will be automatically updated within 30\n                            seconds of synchronization, but those using an older browser need\n                            only click the refresh button (<i class=\"fa fa-refresh\"></i>) to\n                            fetch new changes.  Note: the refresh button will <strong>not</strong>\n                            be visible if your browser is modern enough to support the\n                            <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/EventSource\">API used\n                            by Inthe.AM for dynamically updating displayed tasks</a>.\n                        </p>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"large-12 columns\">\n                        <h3 id=\"custom_task_server\">Use a custom Task Server</h3>\n                    </div>\n                    <div class=\"large-12 columns\">\n                        <label>Taskd Server</label>\n                        ");
  hashContexts = {'type': depth0,'id': depth0,'name': depth0,'value': depth0};
  hashTypes = {'type': "STRING",'id': "STRING",'name': "STRING",'value': "ID"};
  options = {hash:{
    'type': ("text"),
    'id': ("id_server"),
    'name': ("server"),
    'value': ("controllers.application.user.taskd_server")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                    </div>\n                    <div class=\"large-12 columns\">\n                        <label>Taskd Credentials</label>\n                        ");
  hashContexts = {'type': depth0,'id': depth0,'name': depth0,'value': depth0};
  hashTypes = {'type': "STRING",'id': "STRING",'name': "STRING",'value': "ID"};
  options = {hash:{
    'type': ("text"),
    'id': ("id_credentials"),
    'name': ("credentials"),
    'value': ("controllers.application.user.taskd_credentials")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                    </div>\n                    <div class=\"large-12 columns\">\n                        <label>Certificate</label>\n                        <input type=\"file\" name=\"certificate\" id=\"id_certificate\">\n                        <p class=\"input-note\">\n                            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controllers.application.user.taskd_files.taskd_certificate", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                        </p>\n                    </div>\n                    <div class=\"large-12 columns\">\n                        <label>Key</label>\n                        <input type=\"file\" name=\"key\" id=\"id_key\">\n                        <p class=\"input-note\">\n                            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controllers.application.user.taskd_files.taskd_key", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                        </p>\n                    </div>\n                    <div class=\"large-12 columns\">\n                        <label>CA Certificate</label>\n                        <p class=\"input-note\">\n                            If you select to trust the taskd server, you need not upload a CA Certificate,\n                            but uploading a certificate and requesting that we validate the taskd server\n                            using that certificate is safer.\n                        </p>\n                        ");
  hashContexts = {'value': depth0,'optionValuePath': depth0,'optionLabelPath': depth0,'content': depth0,'id': depth0};
  hashTypes = {'value': "ID",'optionValuePath': "STRING",'optionLabelPath': "STRING",'content': "ID",'id': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'value': ("controllers.application.user.taskd_files.taskd_trust"),
    'optionValuePath': ("content.short"),
    'optionLabelPath': ("content.long"),
    'content': ("taskd_trust_settings"),
    'id': ("id_trust")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                        <input type=\"file\" name=\"ca\" id=\"id_ca\">\n                        <p class=\"input-note\">\n                            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controllers.application.user.taskd_files.taskd_ca", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                        </p>\n                    </div>\n                    <div class=\"large-12 columns\">\n                        <a href=\"\" class=\"button radius\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save_taskd", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Save Settings</a>\n                        <a href=\"\" class=\"button radius alert\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "reset_taskd", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Reset to Default</a>\n                    </div>\n                </div>\n            </div>\n        </dd>\n        <dd>\n            <a href=\"#interface\">Interface &amp; Customizations</a>\n            <div id=\"interface\" class=\"content\">\n                <div class=\"row\">\n                    <div class=\"large-12 columns\">\n                        <h3>Color Scheme</h3>\n                        <label>Color Scheme</label>\n                        ");
  hashContexts = {'value': depth0,'optionValuePath': depth0,'optionLabelPath': depth0,'content': depth0,'id': depth0};
  hashTypes = {'value': "ID",'optionValuePath': "STRING",'optionLabelPath': "STRING",'content': "ID",'id': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'value': ("controllers.application.user.colorscheme"),
    'optionValuePath': ("content.file"),
    'optionLabelPath': ("content.name"),
    'content': ("themeOptions"),
    'id': ("id_theme")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                        <a href=\"\" class=\"button radius\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save_colorscheme", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Save Color Scheme</a>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"large-12 columns\">\n                        <h3>Custom <span class=\"code\">.taskrc</span></h3>\n                        ");
  hashContexts = {'name': depth0,'value': depth0,'cols': depth0,'rows': depth0};
  hashTypes = {'name': "STRING",'value': "ID",'cols': "STRING",'rows': "STRING"};
  options = {hash:{
    'name': ("custom_taskrc"),
    'value': ("controllers.application.user.taskrc_extras"),
    'cols': ("80"),
    'rows': ("10")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.textarea || depth0.textarea),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n                        <p class=\"input-note\">\n                            Only configuration values relating to urgency or UDA definitions\n                            will have an effect,\n                            but entering your entire local <span class=\"code\">.taskrc</span>\n                            is both safe and encouraged.\n                        </p>\n                        <a href=\"\" class=\"button radius\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save_taskrc", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Save Settings</a>\n                    </div>\n                </div>\n                ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "taskUpdateStreamCompatible", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n            </div>\n        </dd>\n        <dd>\n            <a href=\"#api\">API Access</a>\n            <div id=\"api\" class=\"content\">\n                <div class=\"row\">\n                    <div class=\"large-12 columns\">\n                        <h3>Add, create or modify your tasks using the REST API</h3>\n                        <p>\n                            Your Taskwarrior tasks are accessible via a RESTful API; you can\n                            use this to query, create, complete, or change\n                            tasks in your task list.\n                        </p>\n                        <table class=\"pure-table pure-table-horizontal\">\n                            <tr>\n                                <th>\n                                    API Key\n                                </th>\n                                <td>\n                                    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controllers.application.user.username", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(":");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controllers.application.user.api_key", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                </td>\n                            </tr>\n                        </table>\n                        <p>\n                            For details regarding how to access and use this API, please consult the\n                            ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "apiDocs", options) : helperMissing.call(depth0, "link-to", "apiDocs", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push(".\n                        </p>\n                    </div>\n                </div>\n            </div>\n        </dd>\n        <dd>\n            <a href=\"#feeds\">RSS &amp; Pebble Feeds</a>\n            <div id=\"feeds\" class=\"content\">\n                <div class=\"row\">\n                    <div class=\"large-12 columns\">\n                        <h3>RSS Feed</h3>\n                        <p>\n                            Turn this feature on to gain access to an RSS feed\n                            listing your most urgent tasks.\n                        </p>\n                        ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.unless.call(depth0, "controllers.application.user.feed_enabled", {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                        <label>RSS Task Feed</label>\n                        ");
  hashContexts = {'value': depth0,'optionValuePath': depth0,'optionLabelPath': depth0,'content': depth0,'id': depth0};
  hashTypes = {'value': "ID",'optionValuePath': "STRING",'optionLabelPath': "STRING",'content': "ID",'id': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'value': ("controllers.application.user.feed_enabled"),
    'optionValuePath': ("content.value"),
    'optionLabelPath': ("content.human"),
    'content': ("feedEnabledUI"),
    'id': ("id_feed_config")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                        <a href=\"\" class=\"button radius\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save_feed", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Save Settings</a>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"large-12 columns\">\n                        <h3>Pebble Cards URL</h3>\n                        <p> \n                            <a href=\"http://keanulee.com/pebblecards/\">Pebble Cards</a> is a\n                            <a href=\"https://getpebble.com/\">Pebble</a> application\n                            allowing one quick access to information like\n                            one's upcoming appointments, the local weather, and when the\n                            sun will set today.  Inthe.AM provides a URL you can use with\n                            Pebble Cards for displaying your current highest priority task.\n                        </p>\n                        ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.unless.call(depth0, "controllers.application.user.pebble_cards_enabled", {hash:{},inverse:self.program(13, program13, data),fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                        <label>Pebble Cards URL</label>\n                        ");
  hashContexts = {'value': depth0,'optionValuePath': depth0,'optionLabelPath': depth0,'content': depth0,'id': depth0};
  hashTypes = {'value': "ID",'optionValuePath': "STRING",'optionLabelPath': "STRING",'content': "ID",'id': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'value': ("controllers.application.user.pebble_cards_enabled"),
    'optionValuePath': ("content.value"),
    'optionLabelPath': ("content.human"),
    'content': ("pebbleCardsEnabledUI"),
    'id': ("id_pebble_cards_config")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                        <a href=\"\" class=\"button radius\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save_pebble_cards", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Save Settings</a>\n                    </div>\n                </div>\n            </div>\n        </dd>\n        <dd>\n            <a href=\"#twilio\">SMS Access</a>\n            <div id=\"twilio\" class=\"content\">\n                <div class=\"row\">\n                    <div class=\"large-12 columns\">\n                        <h3>Create new tasks via text message</h3>\n                        <p>\n                            Inthe.AM can receive and add items to your task list via SMS, but\n                            it requires a little bit of configuration on your part.\n                        </p>\n                        <ol>\n                            <li>Sign up for a <a href=\"https://www.twilio.com/try-twilio\">Twilio account</a>.</li>\n                            <li>\n                                Add funds to your Twilio account. At the time of writing,  Twilio charges\n                                around $0.01 for each incoming or outgoing SMS message (incoming messages are slightly cheaper),\n                                and each phone number costs $1.00/month.\n                            </li>\n                            <li>\n                                <a href=\"https://www.twilio.com/user/account/phone-numbers/available/local\">Buy a phone number</a>.\n                            </li>\n                            <li>\n                                From your phone number's configuration screen, set the field \"Messaging Request URL\" to\n                                your personal incoming SMS URL: <code>https://inthe.am");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controllers.application.urls.sms_url", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</code>.\n                            </li>\n                            <li>\n                                Press save.\n                            </li>\n                        </ol>\n                        <p>\n                            After you have configured the above, you can send SMS messages to your\n                            Twilio phone number.  Currently, the only command implemented is 'add',\n                            but in the future additional commands may be added.\n                        </p>\n                        <p>\n                            As an example, you could add a task to the project \"birthday\" with a due\n                            date of tomorrow and high priority by sending an SMS message with the following\n                            contents:\n                            <pre>add project:birthday due:tomorrow priority:h It's my birthday</pre>\n                        </p>\n                        ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.unless.call(depth0, "controllers.application.user.twilio_auth_token", {hash:{},inverse:self.program(17, program17, data),fn:self.program(15, program15, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                    </div>\n                    <div class=\"large-12 columns\">\n                        <label>Twilio Auth Token</label>\n                        ");
  hashContexts = {'type': depth0,'id': depth0,'name': depth0,'value': depth0};
  hashTypes = {'type': "STRING",'id': "STRING",'name': "STRING",'value': "ID"};
  options = {hash:{
    'type': ("text"),
    'id': ("id_twilio_auth_token"),
    'name': ("twilio_auth_token"),
    'value': ("controllers.application.user.twilio_auth_token")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                    </div>\n                    <div class=\"large-12 columns\">\n                        <label>Phone number whitelist</label>\n                        ");
  hashContexts = {'name': depth0,'id': depth0,'value': depth0,'placeholder': depth0};
  hashTypes = {'name': "STRING",'id': "STRING",'value': "ID",'placeholder': "STRING"};
  options = {hash:{
    'name': ("sms_whitelist"),
    'id': ("id_sms_whitelist"),
    'value': ("controllers.application.user.sms_whitelist"),
    'placeholder': ("+15555555555")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.textarea || depth0.textarea),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n                        <p class='input-note'>\n                            One phone number per line.  Leave empty to allow messages from any phone number.\n                        </p>\n                    </div>\n                </div>\n                <a href=\"\" class=\"button radius\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save_twilio", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Save Settings</a>\n            </div>\n        </dd>\n        <dd>\n            <a href=\"#dangerous\">Danger Zone</a>\n            <div id=\"dangerous\" class=\"content\">\n                <div class=\"row\">\n                    <div class=\"large-12 columns\">\n                        <h3>Delete your account information</h3>\n                        <p>\n                            Pressing this button will delete both any task information\n                            currently stored in your task list on Inthe.AM, as well as\n                            clear any information stored in your Inthe.AM taskd account.\n                        </p>\n                    </div>\n                </div>\n                <a href=\"\" class=\"button radius alert\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "clear_task_data", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Clear Task Data</a>\n            </div>\n        </dd>\n    </dl>\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "footer", options) : helperMissing.call(depth0, "partial", "footer", options))));
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["createTaskModal"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div id=\"new_task_form\" class=\"reveal-modal\" data-reveal>\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "taskForm", options) : helperMissing.call(depth0, "partial", "taskForm", options))));
  data.buffer.push("\n    <a class=\"close-reveal-modal\">&#215;</a>\n</div>\n");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["create_annotation"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div id=\"new_annotation_form\" class=\"reveal-modal\" data-reveal>\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "annotation_form", options) : helperMissing.call(depth0, "partial", "annotation_form", options))));
  data.buffer.push("\n    <a class=\"close-reveal-modal\">&#215;</a>\n</div>\n");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["editTask"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"row standalone\">\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "taskForm", options) : helperMissing.call(depth0, "partial", "taskForm", options))));
  data.buffer.push("\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "footer", options) : helperMissing.call(depth0, "partial", "footer", options))));
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["error"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"row standalone\">\n    <h2>We're really sorry about this&hellip;</h2>\n    <p>\n        An error was encountered while trying to service your request.\n    </p>\n    <p>\n        If you continually see this message, please file an issue on\n        <a href=\"https://github.com/coddingtonbear/inthe.am/issues\">Inthe.AM's Github Project</a>\n        with a little information about what you were doing when this\n        message appeared.\n    </p>\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "footer", options) : helperMissing.call(depth0, "partial", "footer", options))));
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["footer"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div id=\"footer\">\n    <hr />\n    Lovingly crafted by <a href=\"http://github.com/coddingtonbear\">Adam Coddington</a> and others.\n    Questions?  Ask in ##inthe.am on <a href=\"http://freenode.net/irc_servers.shtml\">Freenode</a>.\n    <a href=\"http://github.com/coddingtonbear/inthe.am\">Contribute to this project on Github</a>.\n</div>\n");
  
});

this["Ember"]["TEMPLATES"]["fourOhFour"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"row standalone\">\n    <h2>404: Sorry!</h2>\n\n    <p>\n        The page you've tried to reach does not exist.\n    </p>\n</div>\n");
  
});

this["Ember"]["TEMPLATES"]["getting_started"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("configure Taskwarrior to\n        synchronize with Inthe.AM or configure Inthe.AM to synchronize\n        with a taskd server you are already using");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("task list");
  }

  data.buffer.push("<div class=\"row standalone\">\n    <h2>Let's get started</h2>\n    <p>\n        <strong>Inthe.AM is designed to augment Taskwarrior, not to\n        replace it</strong>, so we recommend that you\n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "configure", options) : helperMissing.call(depth0, "link-to", "configure", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push(".\n        But, you can get started by creating a task right now by\n        clicking the <i class=\"fa fa-pencil-square-o\">New</i> icon above.\n    </p>\n    <p>\n        After you've synchronized or created some tasks, you can see\n        them in your ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "tasks", options) : helperMissing.call(depth0, "link-to", "tasks", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push(".\n    </p>\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "footer", options) : helperMissing.call(depth0, "partial", "footer", options))));
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"row standalone\">\n</div>\n");
  
});

this["Ember"]["TEMPLATES"]["mobileTasks"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n            <div class=\"task\">\n                ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "task", "task", options) : helperMissing.call(depth0, "link-to", "task", "task", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n            </div>\n        ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n                    <div ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': (":task-item task.taskwarrior_class")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">\n                        <div ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': (":task-list-icon task.status")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">\n                            <i ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': (":task-icon :fa task.icon")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push("></i>\n                        </div>\n                        <div class=\"task-list-item\">\n                            ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "task.project", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                            <p class=\"description\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "task.description", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</p>\n                            <p class=\"tags\">\n                                ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "task.annotations", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                                ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "task.tags", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                            </p>\n                        </div>\n                    </div>\n                ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n                                <h5 class=\"status\" ");
  hashContexts = {'title': depth0};
  hashTypes = {'title': "STRING"};
  options = {hash:{
    'title': ("task.project")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.propercase || depth0.propercase),stack1 ? stack1.call(depth0, "task.project", options) : helperMissing.call(depth0, "propercase", "task.project", options))));
  data.buffer.push("</h5>\n                            ");
  return buffer;
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n                                    <i class=\"fa fa-pencil-square\"></i>\n                                ");
  }

function program7(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                                    <i class=\"fa fa-tag\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</i>\n                                ");
  return buffer;
  }

function program9(depth0,data) {
  
  
  data.buffer.push("\n            <div class=\"task\">\n                <div class=\"task-item\">\n                    <div class=\"task-list-item\">\n                        <p class=\"description\">\n                            No tasks currently exist\n                        </p>\n                    </div>\n                </div>\n            </div>\n        ");
  }

  data.buffer.push("<div class=\"row full-width\">\n    <div id=\"mobile-list\">\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "task", "in", "pendingTasks", {hash:{},inverse:self.program(9, program9, data),fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n</div>\n");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["task"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n            <p class=\"subtitle\" ");
  hashContexts = {'title': depth0};
  hashTypes = {'title': "STRING"};
  options = {hash:{
    'title': ("project")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">\n                <span class=\"project\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.propercase || depth0.propercase),stack1 ? stack1.call(depth0, "project", options) : helperMissing.call(depth0, "propercase", "project", options))));
  data.buffer.push("</span>\n            </p>\n        ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                <i class=\"fa fa-tag\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</i>\n            ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n            <ul id=\"task-actions\" class=\"inline-list\">\n                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "start", {hash:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                <li>\n                    <a href=\"#\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "add_annotation", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                        <i class=\"fa fa-pencil\">Add Annotation</i>\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "edit", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                        <i class=\"fa fa-pencil-square-o\">Edit</i>\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "complete", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                        <i class=\"fa fa-check-circle-o\">Mark Completed</i>\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "delete", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                        <i class=\"fa fa-ban\">Delete</i>\n                    </a>\n                </li>\n            </ul>\n        ");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                    <li>\n                        <a href=\"#\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "stop", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                            <i class=\"fa fa-star-o\">Stop</i>\n                        </a>\n                    </li>\n                ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                    <li>\n                        <a href=\"#\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "start", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                            <i class=\"fa fa-star\">Start</i>\n                        </a>\n                    </li>\n                ");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n                    <tr>\n                        <th>Depends Upon</th>\n                        <td>\n                            <ul class=\"depends_tickets\">\n                                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "dependent_tickets", {hash:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </ul>\n                        </td>\n                    </tr>\n                ");
  return buffer;
  }
function program11(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n                                    <li ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("this.status")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">\n                                        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "task", "", options) : helperMissing.call(depth0, "link-to", "task", "", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                                    </li>\n                                ");
  return buffer;
  }
function program12(depth0,data) {
  
  var hashTypes, hashContexts;
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "description", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  }

function program14(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n                    <tr>\n                        <th>Blocks</th>\n                        <td>\n                            <ul class=\"blocked_tickets\">\n                                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "blocked_tickets", {hash:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </ul>\n                        </td>\n                    </tr>\n                ");
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                            <i class=\"fa fa-tag\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</i>\n                        ");
  return buffer;
  }

function program18(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n                    <tr>\n                        <th>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "label", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</th>\n                        <td>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.markdown || depth0.markdown),stack1 ? stack1.call(depth0, "value", options) : helperMissing.call(depth0, "markdown", "value", options))));
  data.buffer.push("</td>\n                    </tr>\n                ");
  return buffer;
  }

function program20(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n                <li>\n                    <a ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "delete_annotation", "description", {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">&#215;</a>\n                    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.calendar || depth0.calendar),stack1 ? stack1.call(depth0, "entry", options) : helperMissing.call(depth0, "calendar", "entry", options))));
  data.buffer.push(":\n                    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "description", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                </li>\n            ");
  return buffer;
  }

  data.buffer.push("<div class=\"row\" id=\"task-header\">\n    <div class=\"medium-12\">\n        <h1 class=\"title\">\n            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "description", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        </h1>\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "project", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        <div class=\"tags\">\n            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "tags", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n    </div>\n</div>\n<div class=\"row\" id=\"task-action-bar\">\n    <div class=\"medium-12\">\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "editable", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n</div>\n<div class=\"row task-content-body\">\n    <div class=\"medium-6 columns details_table\">\n        <table class=\"details\">\n            <tbody>\n                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "dependent_tickets", {hash:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "blocked_tickets", {hash:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                <tr>\n                    <th>Description</th>\n                    <td>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "description", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</td>\n                </tr>\n                <tr>    \n                    <th>Project</th>\n                    <td><span class=\"project\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "project", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span></td>\n                </tr>\n                <tr>\n                    <th>Status</th>\n                    <td>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.propercase || depth0.propercase),stack1 ? stack1.call(depth0, "status", options) : helperMissing.call(depth0, "propercase", "status", options))));
  data.buffer.push("</td>\n                </tr>\n                <tr>\n                    <th>Tags</th>\n                    <td>\n                        ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "tags", {hash:{},inverse:self.noop,fn:self.program(16, program16, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                    </td>\n                </tr>\n                <tr>\n                    <th>Urgency</th>\n                    <td>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "urgency", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</td>\n                </tr>\n                <tr>\n                    <th>Priority</th>\n                    <td>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "priority", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</td>\n                </tr>\n                <tr>\n                    <th>Due</th>\n                    <td>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.calendar || depth0.calendar),stack1 ? stack1.call(depth0, "due", options) : helperMissing.call(depth0, "calendar", "due", options))));
  data.buffer.push("</td>\n                </tr>\n                <tr>\n                    <th>Entered</th>\n                    <td>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.calendar || depth0.calendar),stack1 ? stack1.call(depth0, "entry", options) : helperMissing.call(depth0, "calendar", "entry", options))));
  data.buffer.push("</td>\n                </tr>\n                <tr>\n                    <th>Started</th>\n                    <td>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.calendar || depth0.calendar),stack1 ? stack1.call(depth0, "start", options) : helperMissing.call(depth0, "calendar", "start", options))));
  data.buffer.push("</td>\n                </tr>\n                <tr>\n                    <th>Wait</th>\n                    <td>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.calendar || depth0.calendar),stack1 ? stack1.call(depth0, "wait", options) : helperMissing.call(depth0, "calendar", "wait", options))));
  data.buffer.push("</td>\n                </tr>\n                <tr>\n                    <th>Scheduled</th>\n                    <td>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.calendar || depth0.calendar),stack1 ? stack1.call(depth0, "scheduled", options) : helperMissing.call(depth0, "calendar", "scheduled", options))));
  data.buffer.push("</td>\n                </tr>\n                <tr>\n                    <th>Modified</th>\n                    <td>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.calendar || depth0.calendar),stack1 ? stack1.call(depth0, "modified", options) : helperMissing.call(depth0, "calendar", "modified", options))));
  data.buffer.push("</td>\n                </tr>\n                <tr>\n                    <th>UUID</th>\n                    <td><span class=\"uuid\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "uuid", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span></td>\n                </tr>\n                ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "processed_udas", {hash:{},inverse:self.noop,fn:self.program(18, program18, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n            </tbody>\n        </table>\n    </div>\n    <div class=\"medium-6 columns annotations_list\">\n        <ul class='annotation_list'>\n            ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "processed_annotations", {hash:{},inverse:self.noop,fn:self.program(20, program20, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n        </ul>\n    </div>\n</div>\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "footer", options) : helperMissing.call(depth0, "partial", "footer", options))));
  data.buffer.push("\n");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["taskForm"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("\n            <h2>Edit task</h2>\n        ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n            <h2>Create a new task</h2>\n        ");
  }

  data.buffer.push("<div class=\"row\">\n    <div class=\"medium-12 columns\">\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "uuid", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"medium-12 columns\">\n        <label>Description</label>\n        ");
  hashContexts = {'name': depth0,'value': depth0};
  hashTypes = {'name': "STRING",'value': "ID"};
  options = {hash:{
    'name': ("description"),
    'value': ("description")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"medium-4 columns\">\n        <label>Priority</label>\n        ");
  hashContexts = {'content': depth0,'optionValuePath': depth0,'optionLabelPath': depth0,'value': depth0};
  hashTypes = {'content': "ID",'optionValuePath': "STRING",'optionLabelPath': "STRING",'value': "ID"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'content': ("priorities"),
    'optionValuePath': ("content.short"),
    'optionLabelPath': ("content.long"),
    'value': ("priority")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    </div>\n    <div class=\"medium-4 columns\">\n        <label>Project</label>\n        ");
  hashContexts = {'value': depth0};
  hashTypes = {'value': "ID"};
  options = {hash:{
    'value': ("project")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    </div>\n    <div class=\"medium-4 columns\">\n        <label>Tags</label>\n        ");
  hashContexts = {'identity': depth0,'tags': depth0,'placeholder': depth0};
  hashTypes = {'identity': "ID",'tags': "ID",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.TagField", {hash:{
    'identity': ("uuid"),
    'tags': ("tags"),
    'placeholder': ("tag1 tag2 (tags separated by a space)")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"medium-4 columns\">\n        <label>Due</label>\n        ");
  hashContexts = {'identity': depth0,'date': depth0,'placeholder': depth0};
  hashTypes = {'identity': "ID",'date': "ID",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.DateField", {hash:{
    'identity': ("uuid"),
    'date': ("due"),
    'placeholder': ("YYYY-MM-DD HH:MM")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    </div>\n    <div class=\"medium-4 columns\">\n        <label>Wait</label>\n        ");
  hashContexts = {'identity': depth0,'date': depth0,'placeholder': depth0};
  hashTypes = {'identity': "ID",'date': "ID",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.DateField", {hash:{
    'identity': ("uuid"),
    'date': ("wait"),
    'placeholder': ("YYYY-MM-DD HH:MM")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    </div>\n    <div class=\"medium-4 columns\">\n        <label>Scheduled</label>\n        ");
  hashContexts = {'identity': depth0,'date': depth0,'placeholder': depth0};
  hashTypes = {'identity': "ID",'date': "ID",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.DateField", {hash:{
    'identity': ("uuid"),
    'date': ("scheduled"),
    'placeholder': ("YYYY-MM-DD HH:MM")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"medium-12 columns\">\n        <button class=\"secondary-button\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n            <i class=\"fa fa-save\">Save</i>\n        </button>\n    </div>\n</div>\n");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["tasks"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n            ");
  hashContexts = {'tagName': depth0,'class': depth0};
  hashTypes = {'tagName': "STRING",'class': "STRING"};
  options = {hash:{
    'tagName': ("div"),
    'class': ("task")
  },inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "task", "task", options) : helperMissing.call(depth0, "link-to", "task", "task", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n                <div ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': (":task-item task.taskwarrior_class")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">\n                    <div ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': (":task-list-icon task.status")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">\n                        <i ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': (":task-icon :fa task.icon")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push("></i>\n                    </div>\n                    <div class=\"task-list-item\">\n                        ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "task.project", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                        <p class=\"description\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "task.description", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</p>\n                        <p class=\"tags\">\n                            ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "task.annotations", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                            ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "task.tags", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                        </p>\n                    </div>\n                </div>\n            ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n                            <h5 class=\"status\" ");
  hashContexts = {'title': depth0};
  hashTypes = {'title': "STRING"};
  options = {hash:{
    'title': ("task.project")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.propercase || depth0.propercase),stack1 ? stack1.call(depth0, "task.project", options) : helperMissing.call(depth0, "propercase", "task.project", options))));
  data.buffer.push("</h5>\n                        ");
  return buffer;
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n                                <i class=\"fa fa-pencil-square\"></i>\n                            ");
  }

function program7(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                                <i class=\"fa fa-tag\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</i>\n                            ");
  return buffer;
  }

function program9(depth0,data) {
  
  
  data.buffer.push("\n            <div class=\"task\">\n                <div class=\"task-item\">\n                    <div class=\"task-list-item\">\n                        <p class=\"description\">\n                            No tasks currently exist\n                        </p>\n                    </div>\n                </div>\n            </div>\n        ");
  }

  data.buffer.push("<div class=\"row full-width\">\n    <div id=\"list\">\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "task", "in", "pendingTasks", {hash:{},inverse:self.program(9, program9, data),fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n    <div id=\"task-details\">\n        ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    </div>\n</div>\n");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["tasksindex"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n        <div class=\"task pure-g\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "view_task", "task", {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n            <div ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': (":pure-u task.status")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">\n                <i ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': (":task-icon :fa task.icon")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push("></i>\n            </div>\n            <div class=\"pure-u-3-4\">\n                <h5 class=\"status\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "task.status", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h5>\n                <p class=\"description\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "task.description", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</p>\n            </div>\n        </div>\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n        <div class=\"task task-selected pure-g\">\n            Nothing to see here...\n        </div>\n    ");
  }

  data.buffer.push("<div class=\"pure-u-1\" id=\"list\">\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "task", "in", "controller", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n<div class=\"pure-u-1\" id=\"main\">\n    <div class=\"task-content\">\n        ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    </div>\n</div>\n");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["termsOfService"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<div class=\"row standalone\">\n    <h2>Terms and Conditions of Use of Inthe.AM</h2>\n    <p><b>1 &nbsp;Acceptance The Use Of Inthe.AM Terms and Conditions</b></p>\n    <p>Your  access  to  and  use  of  Inthe.AM is  subject exclusively to these Terms and Conditions. You will not use the Website for any purpose that is unlawful or prohibited by these Terms and Conditions. By using  the  Website  you  are  fully  accepting  the  terms,  conditions  and disclaimers contained in this notice. If you do not accept these Terms and Conditions you must immediately stop using the Website.</p>\n\n    <p><b>2 &nbsp;Credit card details</b></p>\n    <p>Inthe.AM will never ask for Credit Card details and request that you do not enter it on any of the forms on Inthe.AM.</p>\n\n    <p><b>3 &nbsp;Advice</b></p>\n    <p>The contents of Inthe.AM website do not constitute advice and should not be relied upon in making or refraining from making, any decision.</p>\n\n    <p><b>4 &nbsp;Change of Use</b></p>\n    <p>Inthe.AM reserves the right to:<br /> 4.1 &nbsp;change or remove (temporarily or permanently) the Website or any part of it without notice and you confirm that Inthe.AM shall not be liable to you for any such change or removal and.<br /> 4.2 &nbsp;change these Terms and Conditions at any time, and your continued use of the Website following any changes shall be deemed to be your acceptance of such change.</p>\n\n    <p><b>5 &nbsp;Links to Third Party Websites</b></p>\n    <p>Inthe.AM Website may include links to third party websites that are controlled and maintained by others. Any link to other websites is not an endorsement of such websites and you acknowledge and agree that we are not responsible for the content or availability of any such sites.</p>\n\n    <p><b>6 &nbsp;Copyright </b></p>\n    <p>6.1 &nbsp;All  copyright,  trade  marks  and  all  other  intellectual  property  rights  in  the Website and its content (including without limitation the Website design, text, graphics and all software and source codes connected with the Website) are owned by or   licensed to Inthe.AM or otherwise used by Inthe.AM as permitted by law.<br /> 6.2 &nbsp;In accessing the Website you agree that you will access the content solely for your personal, non-commercial use. None of the content may be downloaded, copied, reproduced, transmitted, stored, sold or distributed without the prior written consent of the copyright holder. This excludes the downloading, copying and/or printing of pages of the Website for personal, non-commercial home use only.</p>\n\n    <p><b>7 &nbsp;Disclaimers and Limitation of Liability </b></p>\n    <p>7.1 &nbsp;The Website is provided on an AS IS and AS AVAILABLE basis without any representation or endorsement made and without warranty of any kind whether express or implied, including but not limited to the implied warranties of satisfactory quality, fitness for a particular purpose, non-infringement, compatibility, security and accuracy.<br /> 7.2 &nbsp;To the extent permitted by law, Inthe.AM will not be liable for any indirect or consequential loss or damage whatever (including without limitation loss of business, opportunity, data, profits) arising out of or in connection with the use of the Website.<br /> 7.3 &nbsp;Inthe.AM makes no warranty that the functionality of the Website will be uninterrupted or error free, that defects will be corrected or that the Website or the server that makes it available are free of viruses or anything else which may be harmful or destructive.<br /> 7.4 &nbsp;Nothing in these Terms and Conditions shall be construed so as to exclude or limit the liability of Inthe.AM for death or personal injury as a result of the negligence of Inthe.AM or that of its employees or agents.</p>\n\n    <p><b>8 &nbsp;Indemnity</b></p>\n    <p>You agree to indemnify and hold Inthe.AM and its employees and agents harmless from and against all liabilities, legal fees, damages, losses, costs and other expenses in relation to any claims or actions brought against Inthe.AM arising out of any breach by you of these Terms and Conditions or other liabilities arising out of your use of this Website.</p>\n\n    <p><b>9 &nbsp;Severance</b></p>\n    <p>If any of these Terms and Conditions should be determined to be invalid, illegal or unenforceable for any reason by any court of competent jurisdiction then such Term or Condition shall be severed and the remaining Terms and Conditions shall survive and remain in full force and effect and continue to be binding and enforceable.</p>\n\n    <p><b>10 &nbsp;Governing Law</b></p>\n    <p>These Terms and Conditions shall be governed by and construed in accordance with the law of USA and you hereby submit to the exclusive jurisdiction of the USA courts.</p>\n\n    <p>For any further information please email <a href='mailto:intheam@adamcoddington.net'>webmaster</a>\n    </p>\n\n    <button id=\"accept-terms\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "accept", 1, {hash:{},contexts:[depth0,depth0],types:["STRING","INTEGER"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Accept</button>\n\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "footer", options) : helperMissing.call(depth0, "partial", "footer", options))));
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["unconfigurable"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"pure-u-1 standalone\">\n    <p>\n        Unfortunately, we weren't able to find any taskwarrior folders in your\n        dropbox account.\n    </p>\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "footer", options) : helperMissing.call(depth0, "partial", "footer", options))));
  data.buffer.push("\n</div>\n");
  return buffer;
  
});