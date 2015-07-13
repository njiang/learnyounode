var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
	res.writeHead(200, {'content-type': 'text/plain'});
	var rs = fs.createReadStream(process.argv[3]);
	rs.pipe(res);
});
server.listen(parseInt(process.argv[2]));