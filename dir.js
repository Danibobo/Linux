var server = require("./server");
var router = require("./router");
var requestHandler = require("./requestHandler");

var h = {};
h["/"] = requestHandler.printDB;
server.start(router.route, h);
