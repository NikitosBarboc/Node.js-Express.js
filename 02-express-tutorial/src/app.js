"use strict";
exports.__esModule = true;
var http = require("http");
var server = http.createServer(function (req, res) {
    console.log(req);
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>home page<h1>');
    res.end();
});
server.listen(5000);
