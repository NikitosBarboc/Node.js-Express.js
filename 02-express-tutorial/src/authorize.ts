import express from 'express';
import Next from './NextType';

function authorize(req: express.Request, response: express.Response, next: Next) {
  const { user } = req.query;
  if (user) {
    console.log('Authorized');
    next();
  } else {
    response.status(401).send('Unauthorized');
  }
  console.log('authorize');
  next();
}

export default authorize;
