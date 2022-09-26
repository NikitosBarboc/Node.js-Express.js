const sayHi = require('./5-utils')
const names = require('./4-names')
const data = require('./6-alternative-flavor')

console.log(names);

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);