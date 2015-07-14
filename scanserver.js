var nodeurl = require('url');
var trace = require('jstrace');

 //  scan-server.js
 var createServer = require("http").createServer;
 var server = createServer(function (req, res) {
   trace('request:start', {url: req.url});
   if (req.method == 'GET') {
		var parsed = nodeurl.parse(req.url, true);
		if (parsed.pathname.indexOf('prognosis') >= 0) {
			res.writeHead(200, {'Content-Type': 'application/json'});
			res.end(JSON.stringify({"ok": true}));
			trace('request:end', {statusCode: 200});
		}
		else {
			res.writeHead(404, {'Content-Type': 'application/json'});
			res.end(JSON.stringify({"error": "notfound"}));
			trace('request:end', {statusCode: 404});
		}
   }
 });
 server.listen(9999, function () {
   console.error("up");
 });