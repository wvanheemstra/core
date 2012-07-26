/**
 * Module dependencies.
 */
var express = require('express');
var http = require('http');
var config = require('config').Customer;

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
 * Set Database Init Path.
 */
var database = "./core_database.js";

/**
 * Database Connections
 */
var database_options = {
	schema: config.dbSchema,
	user: config.dbUser,
	password: config.dbPassword,
	host: config.dbHost,
	port: config.dbPort,
	logging: config.dbLogging
}; 

/**
 * db (database)
 * @type {Object}
 * @param Object [database_options] the database options
 */
GLOBAL.db = require(database) (database_options);

/**
 * HTTP Server
 */
server.listen(port, address, function() {
  console.log("Express server listening on " 
  + server.address().address 
  + " at port " 
  + server.address().port 
  + " in " 
  + process.env.NODE_ENV 
  + " mode.");
});	  
	  