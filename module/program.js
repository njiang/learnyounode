var filterModule = require('./module.js');
var filter = process.argv[3];
filterModule(process.argv[2], filter, function(err, data) {
	if (!err)
		data.forEach(function(name) {console.log(name)});
});