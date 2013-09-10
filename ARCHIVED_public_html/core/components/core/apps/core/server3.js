// see http://www.youtube.com/watch?v=qws6LOvDQRE
var util = require('util'),
	http = require('http');

/* call this file as a URL
/with adding the options below.
/e.g. localhost:3000/add/2/2
/will return 4
/add/2/2 => 4
/sub/103/42 => 61
/mul/3/2 => 6
/div/100/25 =>4
*/	
var operations = {
	add: function(a,b){return a + b},
	sub: function(a,b){return a - b},
	mul: function(a,b){return a * b},
	div: function(a,b){return a / b}
}
	
http.createServer(function(req, res) {
	var parts = req.url.split("/"),
		op = operations[parts[1]],
		a = parseInt(parts[2], 10),
		b = parseInt(parts[3], 10);
	//util.puts(util.inspect(parts));
	var result = op ? op(a,b) : "Error";
	res.writeHead(200, {
		'Content-type': 'text/plain'
	});
	res.end("" + result);
}).listen(3000, "127.0.0.1");

util.puts('Server running at http://127.0.0.1:3000/');