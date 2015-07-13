var http = require('http');
var nodeurl = require('url');
var map = require('through2-map');

var server = http.createServer(function(req, res) {
	if (req.method == 'GET') {
		var parsed = nodeurl.parse(req.url, true);
		var queryData = parsed.query;
		var isodate = queryData['iso'];
		var d = new Date(isodate);
		//console.log(parsed.query);
		if (parsed.pathname.indexOf('parsetime') >= 0) {
			var result = {'hour': d.getHours(), 'minute': d.getMinutes(), 'second': d.getSeconds()};
			var json = JSON.stringify(result);
			res.writeHead(200, {'Content-Type': 'application/json'});
			res.end(json);
		}
		else if (parsed.pathname.indexOf('unixtime') >= 0) {
			var result = {'unixtime' : d.getTime()};
			var json = JSON.stringify(result);
			res.writeHead(200, {'Content-Type': 'application/json'});
			res.end(json);
		}
	}
});
server.listen(Number(process.argv[2]));