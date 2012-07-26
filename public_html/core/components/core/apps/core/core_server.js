/**
 * Module dependencies.
 */
var express = require('express');
var http = require('http');

/**
 * Create Application Server.
 */
var server = http.createServer(express);

/**
 * express
 * @type {Express}
 *
 * The Singleton of Express express instance
 */
GLOBAL.express = express;

/**
 * Retrieve Command Line Arguments
 * [0] process : String 'node'
 * [1] app : void
 * [2] address : String '127.0.0.1'
 * [3] port : Number 3000
 */
var args = process.argv;

/**
 * address
 * @type {String}
 *
 * HTTP Server Address (i.e. IP or host)
 */
var address = args[2] ? args[2]: '127.0.0.1';

/**
 * port
 * @type {Number}
 *
 * HTTP Server Port
 */
var port = args[3] ? args[3]: 3000;

/**
 * HTTP Server
 */
server.listen(port, address, function() {
  console.log("Express server listening on " + server.address().address + " at port " + server.address().port + " in " + process.env.NODE_ENV + " mode.");
});	  
	  