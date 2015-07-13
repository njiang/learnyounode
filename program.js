var fs = require('fs');
fs.readFile(process.argv[2], function(err, data) {
	if (!err) {
		var buffer = data.toString();
		console.log(buffer.split('\n').length - 1);
	}
});
