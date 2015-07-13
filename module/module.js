module.exports = function(dir, filter, callback) {
	var fs = require('fs');
	fs.readdir(dir, function(err, list) {
		if (err) 
			return callback(err);
		var data = [];
		list.forEach(function(file) {
			if (file.indexOf("." + filter) >= 0)
				data.push(file);
		});
		callback(false, data);
	});
};