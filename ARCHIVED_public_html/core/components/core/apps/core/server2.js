var util = require('util'),
	http = require('http');

http.createServer(function(req, res) {
	res.writeHead(200, {
		'Content-type': 'text/html'
	});
	res.write("<h1>Hello World!</h1>");
	res.end("<h2>This is the end!</h2>");
}).listen(3000, "127.0.0.1");

util.puts('Server running at http://127.0.0.1:3000/');