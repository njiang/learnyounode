var http = require("http");
var bl = require("bl");

function getHttpResult(urls, index) {
	if (index < urls.length) {
		http.get(urls[index], function(response) {
			//console.log(response);
			response.pipe(bl(function(err, data) {
				if (err) console.log(err);
				else {
					var contents = data.toString();
					console.log(contents);
				}
				getHttpResult(urls, index + 1);
			}));
		});
	}
}

var urls = [];
urls.push(process.argv[2]);
urls.push(process.argv[3]);
urls.push(process.argv[4]);
//console.log(urls);
getHttpResult(urls, 0);
