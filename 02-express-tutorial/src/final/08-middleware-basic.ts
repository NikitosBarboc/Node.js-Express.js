import express from 'express';

type Next = () => void | Promise<void>;

const app = express();

function logger(req: express.Request, response: express.Response, next: Next) {
  console.log(req.method, req.url, new Date().toISOString());
  next();
}

app.get('/', logger, (req, res) => {
  res.status(200).send('Home');
});

app.get('/about', logger, (req, res) => {
  res.status(200).send('About');
});

// req => middleware => res

app.listen(5000, () => {
  console.log('server is listening on port 5000....');
});
