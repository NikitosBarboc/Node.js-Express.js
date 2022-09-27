import express from 'express';
import { products } from '../../data';

const isNumber = (value: number) => !Number.isNaN(Number(value));

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Home page</h1><a href="/api/products">products</a>');
});

app.get('/api/products', (req, res) => {
  res.status(200).json(products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  }));
});

app.get('/api/products/:productID', (req, res) => {
  const { productID } = req.params;
  const singleProduct = products.find((product) => String(product.id) === productID);

  if (!singleProduct) {
    res.status(404).send('<h1>Product does not exist</h1>');
  } else {
    res.status(200).json(singleProduct);
  }
});

app.get('/api/products/:productID/reviews/:reviewsID', (req, res) => {
  const { productID, reviewsID } = req.params;
  res.send(`Hello word!!!!!!!!!!!!!!!!!${productID} + ${reviewsID}`);
});

app.get('/api/v1/query', (req, res) => {
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => (
      product.name.includes(String(search))
    ));
  }
  if (limit && isNumber(+limit)) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length === 0) {
    res.status(200).send({ secess: true, data: [] });
    return;
  }
  res.status(200).send({ secess: true, data: sortedProducts });
});

app.listen(5000, () => {
  console.log('server is listening on port 5000....');
});
