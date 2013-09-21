var express = require('express'),
    device  = require('../lib/device.js'),
    redirect = require('express-redirect');

config = require('../config/server.js');
var configs = config.configs;


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
console.log('Node Version: ' + process.version);
console.log("Express server listening on port %d", server_port);
console.log("To shutdown server gracefully type: node prepareForStop.js");

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
		console.log("Shutdown app successful.");
	}
	catch(ex) {
		console.log("Shutdown app failed.");
	}
  	try {
		api.close();
		console.log("Shutdown api successful.");
	}
	catch(ex) {
		console.log("Shutdown api failed.");
	} 
  console.log("All preparations for shutdown completed.");
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
 * DEVELOPMENT
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
    
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser());
    app.use(device.capture());
    
    app.enableDeviceHelpers();
    app.enableViewRouting();

    app.use(app.router);
    app.use('/resources', express.static(__dirname + '/../public/resources'));
    app.use('/app', express.static(__dirname + '/../public/app'));
    app.use(express.static(__dirname + '/../public')); // Fall back to this as a last resort
    
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); // specific for development
});

app.all('*', function(req, res, next){
  if (!req.get('Origin')) return next();
  // use "*" here to accept any origin
  res.set('Access-Control-Allow-Origin', '*');  // Accepts requests coming from anyone, replace '*' by configs.allowedHost to restrict it
  res.set('Access-Control-Allow-Methods', 'GET, PUT, POST');
  res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
  // res.set('Access-Control-Allow-Max-Age', 3600);
  if ('OPTIONS' == req.method) return res.send(200);
  next();
});

/*
 * PRODUCTION
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
    
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser());
    app.use(device.capture());
    
    app.enableDeviceHelpers();
    app.enableViewRouting();

    app.use(app.router);
    app.use('/resources', express.static(__dirname + '/../public/resources'));
    app.use('/app', express.static(__dirname + '/../public/app'));
    app.use(express.static(__dirname + '/../public')); // Fall back to this as a last resort
    
    app.use(express.errorHandler()); // specific for production
});

app.all('*', function(req, res, next){
  if (!req.get('Origin')) return next();
  // use "*" here to accept any origin
  res.set('Access-Control-Allow-Origin', '*'); // Accepts requests coming from anyone, replace '*' by configs.allowedHost to restrict it
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
			console.log("App requested, but not found: " + app);
			app = 'not_found';
		}
	}
	console.log("App requested: " + app);	
    res.render(app, { title: title, host: host, web_root: web_root, layout: false });
});

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
			console.log("App requested, but not found: " + appDebug);
			app = 'not_found';
			appDebug = app + '-debug';
		}
	}
	console.log("App requested: " + appDebug);		
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
		app = req.query.app
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
			console.log("App requested, but not found: " + appTouch);
			app = 'not_found';
			appTouch = app + '-touch';
		}
	}
	console.log("App requested: " + appTouch);	
    res.render(appTouch, { title: title, host: host, web_root: web_root, layout: false });
});

app.listen(app_port, function () {
	console.log("Express app server listening on port %d in %s mode", app_port, app.settings.env);
	// launching as the root user 
	// and then downgrading the process permissions 
	// to run as another (non-privileged) user 
	// after the port is bound
	// for better security
	try {
		process.setgid(app_gid); // Note: this function is only available on POSIX platforms (i.e. not Windows)
		console.log("App GID set to " + app_gid);
	}
	catch(ex) {
		console.log("App GID not set. Not supported on Windows.");
	}
	try {
		process.setuid(app_uid); // Note: this function is only available on POSIX platforms (i.e. not Windows)
		console.log("App UID set to " + app_uid);
	}
	catch(ex) {
		console.log("App UID not set. Not supported on Windows.");
	}
});

api.listen(api_port, function() {
	console.log("Express api server listening on port %d in %s mode", api_port, api.settings.env);
	// launching as the root user 
	// and then downgrading the process permissions 
	// to run as another (non-privileged) user 
	// after the port is bound
	// for better security
	try {
		process.setgid(api_gid); // Note: this function is only available on POSIX platforms (i.e. not Windows)
		console.log("Api GID set to " + api_gid);
	}
	catch(ex) {
		console.log("Api GID not set. Not supported on Windows.");
	}
	try {
		process.setuid(api_uid); // Note: this function is only available on POSIX platforms (i.e. not Windows)
		console.log("Api UID set to " + api_uid);
	}
	catch(ex) {
		console.log("Api UID not set. Not supported on Windows.");
	}
});