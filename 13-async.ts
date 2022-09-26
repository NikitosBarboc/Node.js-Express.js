import fs from 'fs';

fs.readFile('./content/second.txt', 'utf-8', (err, result) => {
  if (err) {
    console.log(err);
    return
  }
  console.log(result);
  console.log('completed first task');
});
console.log('starting next task');

//
console.time();
setTimeout(() => {
  console.log('setTimeout')
}, 1)
console.timeEnd();
console.time();
setImmediate(() => {
  console.log('setImmediate')
});
console.timeEnd();

//
import http from 'http';

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Home page');
  }
  else if (req.url === '/about') {
    for (let i = 0; i < 200; i++) {
      for (let j = 0; j < 200; j++) {
        console.log(`${i}, ${j}`)
      }
    }
    res.end('About Page');
  } else {
    res.end("<h1>Sorry this page doesn't exist</h1>")
  }

});

server.listen(8080, () => {
  console.log('Server listening on port : 5000....')
});
