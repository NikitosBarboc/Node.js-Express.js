const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
console.log(_.flattenDeep(items));

console.log(items.flat(100))