import express from 'express';

import { products } from '../../data';

const app = express();

app.get('/', (req, res) => {
  res.status(200).json(products);
});

app.listen(5000, () => {
  console.log('server is listening on port 5000....');
});
