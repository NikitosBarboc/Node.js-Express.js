import http, { createServer, IncomingMessage, ServerResponse } from 'http';

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  if (req.url === '/') {
    res.end('Welcome to our home page!');
  }
  if (req.url === '/about') {
    res.end('Welcome to bebra-town!');
  }
  res.end(`<h1>Oops!</h1> <p>Page not found</p>`)
});
server.listen(5000)