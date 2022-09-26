var _a = require('fs'), readFile = _a.readFile, writeFile = _a.writeFile;
readFile('./content/first.txt', 'utf8', function (err, data) {
    if (err) {
        console.log(err);
        return;
    }
    var first = data;
    readFile('./content/second.txt', 'utf8', function (err, data) {
        if (err) {
            console.log(err);
            return;
        }
        var second = data;
        writeFile('./content/result-async.txt', "Here is the result : ".concat(first, ", ").concat(second), { flag: 'a' }, function (err, result) {
            if (err) {
                console.log(err);
                return;
            }
            console.log(result);
        });
    });
});
