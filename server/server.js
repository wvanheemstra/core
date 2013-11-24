var express = require('express'),
    device  = require('../lib/device.js'),
    redirect = require('express-redirect'),
	brackets = require('brackets');

/*
 * BRACKETS - Online editor called Brackets
 *
 * See https://npmjs.org/package/brackets
 */
	
/*
 * CONFIGS - The Configurations
 */ 	
config = require('../config/server.js');
var configs = config.configs,
	server_prefix = configs.server_prefix || 'CORE';
	
/*
 * SERVICES - The Services
 */ 
var services = require('../routes/services'); // it seems that we have to start each required file as its own var
 
/*
 * SERVER - The Server used for shutdown etc
 * See: https://www.exratione.com/2011/07/running-a-nodejs-server-as-a-service-using-forever/
 */
var server = express();
// Port
if(typeof configs.server_port === 'undefined'){
	var server_port = process.env.PORT || 11080;
}
else {
	var server_port = configs.server_port;
}
server.listen(server_port);
console.log(server_prefix + " - Node Version: " + process.version);
console.log(server_prefix + " - Express server listening on port %d", server_port);
console.log(server_prefix + " - To shutdown server gracefully type: node prepareForStop.js");

server.get('/prepareForShutdown', function(req, res) {
  if(req.connection.remoteAddress == "127.0.0.1"
    || req.socket.remoteAddress == "127.0.0.1"
    // 0.4.7 oddity in https only
    || req.connection.socket.remoteAddress == "127.0.0.1") 
  {
    managePreparationForShutdown(function() {
      // don't complete the connection until the preparation is done.
      res.statusCode = 200;
      res.end();
    });
  } 
  else {
    res.statusCode = 500;
    res.end();
  }
});

var managePreparationForShutdown = function(callback) {
  // perform all the cleanup and other operations needed prior to shutdown,
  // but do not actually shutdown. Call the callback function only when
  // these operations are actually complete.
  	try {
		app.close();
		console.log(server_prefix + " - Shutdown app successful.");
	}
	catch(ex) {
		console.log(server_prefix + " - Shutdown app failed.");
	}
  	try {
		api.close();
		console.log(server_prefix + " - Shutdown api successful.");
	}
	catch(ex) {
		console.log(server_prefix + " - Shutdown api failed.");
	} 
  console.log(server_prefix + " - All preparations for shutdown completed.");
  callback();
};

/*
 * APP - The Application
 */   
var app = express();
// Port
if(typeof configs.app_port === 'undefined'){
	var app_port = process.env.PORT || 4000;
}
else {
	var app_port = configs.app_port;
}
// Group ID
if(typeof configs.app_gid === 'undefined'){
	var app_gid = "root";
}
else {
	var app_gid = configs.app_gid;
}
// User ID
if(typeof configs.app_uid === 'undefined'){
	var app_uid = "root";
}
else {
	var app_uid = configs.app_uid;
}
// App List
if(typeof configs.app_list === 'undefined'){
	var app_list = {};
}
else {
	var app_list = configs.app_list;
}
/*
 * API- The Application Programming Interface
 */
var api = express();
// Port
if(typeof configs.api_port === 'undefined'){
	var api_port = app_port+1 || 4001;
}
else {
	var api_port = configs.api_port;
}
// Group ID
if(typeof configs.api_gid === 'undefined'){
	var api_gid = "root";
}
else {
	var api_gid = configs.api_gid;
}
// User ID
if(typeof configs.app_uid === 'undefined'){
	var api_uid = "root";
}
else {
	var api_uid = configs.api_uid;
}
// Api List
if(typeof configs.api_list === 'undefined'){
	var api_list = {};
}
else {
	var api_list = configs.api_list;
}
// Action List
if(typeof configs.action_list === 'undefined'){
	var action_list = {};
}
else {
	var action_list = configs.action_list;
}
// Model List
if(typeof configs.model_list === 'undefined'){
	var model_list = {};
}
else {
	var model_list = configs.model_list;
}
// Format List
if(typeof configs.format_list === 'undefined'){
	var format_list = {};
}
else {
	var format_list = configs.format_list;
}

api.configure(function(){
	api.use(api.router);
});

api.all('*', function(req, res, next){
  if (!req.get('Origin')) return next();
  // use "*" here to accept any origin
  res.set('Access-Control-Allow-Origin', '*');  // Accepts requests coming from anyone, replace '*' by configs.allowedHost to restrict it
  res.set('Access-Control-Allow-Methods', 'GET, PUT, POST');
  res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
  // res.set('Access-Control-Allow-Max-Age', 3600);
  if ('OPTIONS' == req.method) return res.send(200);
  next();
});

api.post('/login', function(req, res){
  console.log(req.body);
  res.send(201);
});

/*
 * APP DEVELOPMENT
 *
 * .bash_profile contains 
 * NODE_ENV=development
 *
 * or start server as follows
 * NODE_ENV=development node server.js
 *
 * on Windows use
 * set NODE_ENV=development
 * check with
 * echo %NODE_ENV% 
 */
app.configure('development', function(){
    app.set('view engine', 'ejs');
    app.set('view options', { layout: true });
    app.set('views', __dirname + '/../public');
    
	// https://github.com/senchalabs/connect/wiki/Connect-3.0
    // app.use(express.bodyParser()); // DEPRECATED
	app.use(express.urlencoded()); // NEW IN CONNECT 3.0
	app.use(express.json()); // NEW IN CONNECT 3.0
	
    app.use(express.methodOverride());
    app.use(express.cookieParser());
    app.use(device.capture());
    
    app.enableDeviceHelpers();
    app.enableViewRouting();

    app.use(app.router);
    app.use('/resources', express.static(__dirname + '/../public/resources'));
    app.use('/app', express.static(__dirname + '/../public/app'));
	app.use('/brackets', brackets(["public", "config"])); // the directory "./public/" will become the initial project root and the other folder(s) will be accessible via Recent Projects dropdown (the small arrow above the navigation tree).
    app.use(express.static(__dirname + '/../public')); // Fall back to this as a last resort
    
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); // specific for development
});

/*
 * APP PRODUCTION
 *
 * .bash_profile contains
 * NODE_ENV=production
 *
 * or start server as follows
 * NODE_ENV=production node server.js
 *
 * on Windows use
 * set NODE_ENV=production
 * check with
 * echo %NODE_ENV% 
 */
app.configure('production', function(){
    app.set('view engine', 'ejs');
    app.set('view options', { layout: true });
    app.set('views', __dirname + '/../public');
    
	// https://github.com/senchalabs/connect/wiki/Connect-3.0
    //app.use(express.bodyParser()); // DEPRECATED
	app.use(express.urlencoded()); // NEW IN CONNECT 3.0
	app.use(express.json()); // NEW IN CONNECT 3.0
	
    app.use(express.methodOverride());
    app.use(express.cookieParser());
    app.use(device.capture());
    
    app.enableDeviceHelpers();
    app.enableViewRouting();

    app.use(app.router);
    app.use('/resources', express.static(__dirname + '/../public/resources'));
    app.use('/app', express.static(__dirname + '/../public/app'));
	// NO EDITOR FOR PRODUCTION app.use('/brackets', brackets(["public", "config"]));
    app.use(express.static(__dirname + '/../public')); // Fall back to this as a last resort
    
    app.use(express.errorHandler()); // specific for production
});

app.all('*', function(req, res, next){
  if (!req.get('Origin')) return next();
  // use "*" here to accept any origin
  res.set('Access-Control-Allow-Origin', '*'); // Accepts requests coming from anyone, replace '*' by configs.allowedHosts to restrict it
  res.set('Access-Control-Allow-Methods', 'GET, PUT, POST');
  res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
  // res.set('Access-Control-Allow-Max-Age', 3600);
  if ('OPTIONS' == req.method) return res.send(200);
  next();
});

if(typeof configs.title === 'undefined'){
	var title = 'Untitled';
}
else {
	var title = configs.title;
}

if(typeof configs.web_root === 'undefined'){
	var web_root = '';
}
else {
	var web_root = configs.web_root;
}

if(typeof configs.host === 'undefined'){
	var host = req.host;
}
else {
	var host = configs.host;
}

// routing to pages
app.get('/', function(req, res) {
	// Distinguish based on an optional key-value parameter in the request url (e.g. '/?app=person')
	var app = 'index'; // default
	// update app variable here with value from 'app' key (e.g. app=person) sets app to 'person'
	if(req.query.app){
		app = req.query.app;
		var app_not_found = true; // default to true
		// lookup app in app list, if not found set to not_found
		for (key in app_list) {		
			if(key == app){
				app = key;
				app_not_found = false;
				break;
			}
		}// eof for
		if(app_not_found) {
			console.log(server_prefix + " - App requested, but not found: " + app);
			app = 'not_found';
		}
	}
	console.log(server_prefix + " - App requested: " + app);	
    res.render(app, { title: title, host: host, web_root: web_root, layout: false });
});

/* EXAMPLES
app.get('/2', function(req, res) {
    res.render('index2', { title: 'Your Company with layout' });
});

app.get('/3', function(req, res) {
    res.render('index2', { title: 'Your Company with layout', layout: 'xpto' });
});

app.get('/4', function(req, res) {
    res.render('index2', { title: 'Your Company with layout', layout: 'etc/layout' });
});

app.get('/5', function(req, res) {
    res.render('index3', { title: 'Your Company with layout' });
});
*/

app.get('/debug', function(req, res) {
	// Distinguish based on an optional key-value parameter in the request url (e.g. '/debug?app=person')
	var app = 'index'; // default
	var appDebug = app + '-debug';
	// update appDebug variable here with value from 'app' key (e.g. app=person) sets appDebug to 'person-debug'
	if(req.query.app){
		app = req.query.app;
		appDebug = app + '-debug';	
		var appDebug_not_found = true; // default to true
		// lookup app in app list, if not found set to not_found
		for (key in app_list) {
			if(key == app){
				app = key;
				appDebug = app + '-debug';
				appDebug_not_found = false;
				break;
			}
		}// eof for
		if(appDebug_not_found) {
			console.log(server_prefix + " - App requested, but not found: " + appDebug);
			app = 'not_found';
			appDebug = app + '-debug';
		}
	}
	console.log(server_prefix + " - App requested: " + appDebug);		
    res.render(appDebug, { title: title, host: host, web_root: web_root, layout: false });
});

app.get('/page-analyzer', function(req, res) {
    res.render('page-analyzer', { title: 'Page Analyzer' });
});

app.get('/touch', function(req, res) {
	// Distinguish based on an optional key-value parameter in the request url (e.g. '/touch?app=person')
	var app = 'index'; // default
	var appTouch = app + '-touch';
	// update appTouch variable here with value from 'app' key (e.g. app=person) sets appTouch to 'person-touch'
	if(req.query.app){
		app = req.query.app;
		appTouch = app + '-touch';
		var appTouch_not_found = true; // default to true
		// lookup app in app list, if not found set to not_found
		for (key in app_list) {
			if(key == app){
				app = key;
				appTouch = app + '-touch';
				appTouch_not_found = false;
				break;
			}
		}// eof for
		if(appTouch_not_found) {
			console.log(server_prefix + " - App requested, but not found: " + appTouch);
			app = 'not_found';
			appTouch = app + '-touch';
		}
	}
	console.log(server_prefix + " - App requested: " + appTouch);
    res.render(appTouch, { title: title, host: host, web_root: web_root, layout: false });
});

// Handles POST requests
app.post('/data', function(req, res) {
	// Distinguish based on an optional key-value parameter in the request url (e.g. '/data?action=write&model=person&format=json')
	var action = 'write'; // default
	var model = ''; // default
	var format = 'json'; // default
	var success = false; //default
	var error = ''; //default
	// find action parameter's value
	if(req.query.action){
		action = req.query.action;
		var action_not_found = true; // default to true	
		// lookup action in action list, if not found set to not_found		
		for (key in action_list) {	
			if(key == action){
				action = key;
				action_not_found = false;
				// find model parameter's value
				if(req.query.model){
					model = req.query.model;
					var model_not_found = true; // default to true
					// lookup model in model list, if not found set to not_found
					for (key in model_list) {	
						if(key == model){
							model = key;
							model_not_found = false;
							// find format parameter's value
							if(req.query.format){
								format = req.query.format;						
								var format_not_found = true; // default to true
								// lookup format in format list, if not found set to not_found
								for (key in format_list) {
									if(key == format){
										format = key;
										format_not_found = false;
										console.log(server_prefix + " - Action requested: " + action);
										console.log(server_prefix + " - Model requested: " + model);
										console.log(server_prefix + " - Format requested: " + format);
										success = true;
										error = "No errors";
										res.render('data/' + action + '/' + model + '/response',{ success: success, error: error, layout: '../layouts/' + format });
									}
								}//eof for
								if(format_not_found) {
									console.log(server_prefix + " - Format requested, but not found: " + format);
									format = 'not_found';
									error = "Format requested, but not found: " + format;
									res.render('data/' + action + '/' + model + '/error/response',{ success: success, error: error, layout: '../layouts/json' });									
								}
							}
						}
					}//eof for
					if(model_not_found) {
						console.log(server_prefix + " - Model requested, but not found: " + model);
						model = 'not_found';
						error = "Model requested, but not found: " + model;
						res.render('data/' + action + '/error/response',{ success: success, error: error, layout: '../layouts/json' });						
					}
				} 
			}
		}//eof for
		if(action_not_found) {
			console.log(server_prefix + " - Action requested, but not found: " + action);
			action = 'not_found';
			error = "Action requested, but not found: " + action;
			res.render('data/error/response',{ success: success, error: error, layout: '../layouts/json' });			
		}
	}
});

app.listen(app_port, function () {
	console.log(server_prefix + " - Express app server listening on port %d in %s mode", app_port, app.settings.env);
	// launching as the root user 
	// and then downgrading the process permissions 
	// to run as another (non-privileged) user 
	// after the port is bound
	// for better security
	try {
		process.setgid(app_gid); // Note: this function is only available on POSIX platforms (i.e. not Windows)
		console.log(server_prefix + " - App GID set to " + app_gid);
	}
	catch(ex) {
		console.log(server_prefix + " - App GID not set. Not supported on Windows.");
	}
	try {
		process.setuid(app_uid); // Note: this function is only available on POSIX platforms (i.e. not Windows)
		console.log(server_prefix + " - App UID set to " + app_uid);
	}
	catch(ex) {
		console.log(server_prefix + " - App UID not set. Not supported on Windows.");
	}
	console.log(server_prefix + " - Online editor at http://" + host + ":" +app_port + "/brackets/");	
});

api.listen(api_port, function() {
	console.log(server_prefix + " - Express api server listening on port %d in %s mode", api_port, api.settings.env);
	// launching as the root user 
	// and then downgrading the process permissions 
	// to run as another (non-privileged) user 
	// after the port is bound
	// for better security
	try {
		process.setgid(api_gid); // Note: this function is only available on POSIX platforms (i.e. not Windows)
		console.log(server_prefix + " - Api GID set to " + api_gid);
	}
	catch(ex) {
		console.log(server_prefix + " - Api GID not set. Not supported on Windows.");
	}
	try {
		process.setuid(api_uid); // Note: this function is only available on POSIX platforms (i.e. not Windows)
		console.log(server_prefix + " - Api UID set to " + api_uid);
	}
	catch(ex) {
		console.log(server_prefix + " - Api UID not set. Not supported on Windows.");
	}
});