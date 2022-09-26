const path = require('path');

console.log(path.join('/'))
const filePath = path.join('/content', 'subfolder', 'test.txt');
const base = path.basename(filePath)
console.log(base, '\n', filePath);
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt' )
console.log(absolute)