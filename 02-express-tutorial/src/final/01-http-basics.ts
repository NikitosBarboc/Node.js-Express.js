import http = require('http');
import path = require('path');

import { readFileSync } from 'fs';

const homePage = readFileSync(path.resolve(__dirname, './navbar-app/index.html'));

const server = http.createServer((req, res) => {
  const { url } = req;
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write(homePage);
    res.end();
  } else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>about page<h1>');
    res.end();
  } else {
    res.writeHead(404);
    res.write('<h1>Not Found 404<h1>');
    res.end();
  }
});

server.listen(5000);
