//  scan-client.js
var request = require("http").request;
var heapdump = require("heapdump");

var contentType = "text/html";
var body = "<html>" +
           "<head><title>hi</title></head>" +
           "<body><p>yo</p></body>" +
           "</html>";


var headers = {
  host : "localhost",
  port : 9999,
  method : "GET",
  path: "/prognosis",
  headers : {
    //"content-type"   : contentType,
    //"content-length" : body.length,
    //"requested-by"   : "dragon"
  }
};

var yolo = request(headers, function (res) {
  res.setEncoding("utf8");
  res.on("data", function (data) {
    console.log("BODY: " + data);
  });

  res.on("end", function () {
    console.error("done!");
  });
});

yolo.end();
heapdump.writeSnapshot('./' + Date.now() + '.heapsnapshot');