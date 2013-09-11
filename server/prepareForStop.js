/*
 * Tell the server to gracefully prepare for shutdown, but do not end the process.
 */
 
console.log("Instructing server to prepare for shutdown");
 
var http = require("http");

config = require('../config/server.js');
var configs = config.configs;

// Port
if(typeof configs.server_port === 'undefined'){
	var server_port = process.env.PORT || 11080;
}
else {
	var server_port = configs.server_port;
}
 
var options = {
  host: "localhost",
  port: server_port,
  path: "/prepareForShutdown",
  method: "HEAD"
};
 
var request = http.request(options, function(response) {
	console.log("Server completed preparations for shutdown");
});
request.end();
request.on("error", function(error) {
	console.log("An error occurred when trying to shutdown server.");
	throw error;
});