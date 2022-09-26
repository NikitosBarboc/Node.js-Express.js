"use strict";
exports.__esModule = true;
var http = require("http");
var fs = require("fs");
http
    .createServer(function (req, res) {
    // const text = fs.readFileSync('./content/subfolder/big-text-file.txt', 'utf8');
    // res.end(text);
    var fileStream = fs.createReadStream('./content/subfolder/big-text-file.txt', 'utf8');
    fileStream.on('open', function () {
        fileStream.pipe(res);
    });
    fileStream.on('error', function (err) {
        console.log(err);
    });
})
    .listen(5000, function () { return console.log('Local host at 5000'); });
