var server = require("./server");
var router = require("./router");
var handler = require("./requestHandler");

var h = {};
h["/"] = handler.printDataB;
server.start(router.route, h);
