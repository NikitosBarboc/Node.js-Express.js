import express from 'express';

type Next = () => void | Promise<void>;

function logger(req: express.Request, response: express.Response, next: Next) {
  console.log(req.method, req.url, new Date().toISOString());
  next();
}

export default logger;
