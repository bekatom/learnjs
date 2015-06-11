var http = require("http");
var url = require('url');

function start(route) {
	function onRequest(request, responce) {
		console.log('Request Recieved');
		var pathname = url.parse(request.url).pathname;
		console.log("Request recieved at : " + pathname);
		
		route(pathname);
		
		responce.writeHead(200, { "Content-Type": "text/plain" });
		responce.write("Hello Word");
		responce.end();
	}

	// onRequest ins annymous function pass to createServer function
	http.createServer(onRequest).listen(8888);
	console.log('Server has stardet');
}

exports.start = start;