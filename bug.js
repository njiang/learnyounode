//console.log("i am okay");
//console.error("i am so incredibly not okay");

var fs = require("fs");
var peach = function(obj) {
	console.trace("traced");
	console.log(obj);
};

var bowser = function(callback) {
	fs.readFile(process.argv[2], {encoding: "utf8"}, callback);
};

var koopa = function(error, file) {
	if (error)
		console.error("failed koopa");
	else
		peach(JSON.parse(file));
};

bowser(koopa);