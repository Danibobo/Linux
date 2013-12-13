var server = require("./server");
var router = require("./router");
var handler = require("./handler");

var h = {};
h["/"] = handler.printDataB;
server.start(router.route, h);
