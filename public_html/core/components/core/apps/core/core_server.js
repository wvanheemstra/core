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
 * [2] port : Number 3000
 */
var args = process.argv;

/**
 * HTTP Server
 */
server.listen(3000);
console.log("Express server listening on port %d.",
	server.address().port);