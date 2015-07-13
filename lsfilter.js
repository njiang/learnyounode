var fs = require('fs');
var filter = "." + process.argv[3];
fs.readdir(process.argv[2], function(err, list) {
	list.forEach(function(file) {
		//console.log(file + " " + filter);
		if (file.indexOf(filter) >= 0)
			console.log(file);
	});
});