/*
The full REST API for this application consists of the following methods:

Method	URL	Action
GET	/services	Retrieve all services
GET	/services/5069b47aa892630aae000001	Retrieve the service with the specified _id
POST	/services	Add a new service
PUT	/services/5069b47aa892630aae000001	Update service with the specified _id
DELETE	/services/5069b47aa892630aae000001	Delete the service with the specified _id
*/

/**
 * Module dependencies.
 */
var express = require('express')
  //, routes = require('./routes')
  //, user = require('./routes/user')
  //, workouts = require('./routes/workouts')
//  , services = require(__dirname, 'routes/services')
  //, orm = require('orm')
  , http = require('http')
  , path = require('path')
  //, apporm = require('./app-orm')
  ;

//CORS middleware
// NOTE: this is now handled inside the service itself
//var allowCrossDomain = function(req, res, next) {
//    //res.header('Access-Control-Allow-Origin', config.allowedDomains); // better configurable
//    res.header('Access-Control-Allow-Origin', 'http://vanheemstrapictures.com');
//    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//    res.header('Access-Control-Allow-Headers', 'Content-Type');
//    next();
//}

var service = require('./routes/services'); // it seems that we have to start each required file as its own var
var mql = require('./services/mql');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
//  app.use(allowCrossDomain);
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

//app.get('/', routes.index);
//app.get('/workouts', workouts.index);
//app.get('/users', user.list);

// services directory
app.get('/services', service.findAll);
app.get('/services/:id', service.findById);
app.post('/services', service.addOne);
app.put('/services/:id', service.updateOne);
app.delete('/services/:id', service.deleteOne);

// the services themselves
// read about access-control-allow-origin here
// http://john.sh/blog/2011/6/30/cross-domain-ajax-expressjs-and-access-control-allow-origin.html
// app.get('/services/mql/read', mql.read); // use app.all instead of app.get so as to set the Access-Control-Allow-Origin
app.all('/services/mql/read', mql.read);
//app.get('/services/mql/write', mql.write);
app.all('/services/mql/write', mql.write); // use app.all instead of app.get so as to set the Access-Control-Allow-Origin

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});