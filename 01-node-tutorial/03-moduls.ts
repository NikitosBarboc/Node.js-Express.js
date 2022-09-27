const sayHi = require('./05-utils')
const names = require('./04-names')
const data = require('./06-alternative-flavor')

console.log(names);

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);