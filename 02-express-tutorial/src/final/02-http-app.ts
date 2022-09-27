import http = require('http');
import path = require('path');

import { readFileSync } from 'fs';

const homePage = readFileSync(path.resolve(__dirname, './navbar-app/index.html'));
const homeStyles = readFileSync(path.resolve(__dirname, './navbar-app/styles.css'));
const homeImage = readFileSync(path.resolve(__dirname, './navbar-app/logo.svg'));
const homeLogic = readFileSync(path.resolve(__dirname, './navbar-app/browser-app.js'));

const server = http.createServer((req, res) => {
  const { url } = req;
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write(homePage);
  } else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>about page<h1>');
  } else if (url === '/styles.css') {
    res.writeHead(200, { 'content-type': 'text/css' });
    res.write(homeStyles);
  } else if (url === '/logo.svg') {
    res.writeHead(200, { 'content-type': 'image/svg+xml' });
    res.write(homeImage);
  } else if (url === '/browser-app.js') {
    res.writeHead(200, { 'content-type': 'text/javascript' });
    res.write(homeLogic);
  } else {
    res.writeHead(404);
    res.write('<h1>Not Found 404<h1>');
  }
  res.end();
});

server.listen(5000);
