import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.status(200).send('Home');
});

app.get('/about', (req, res) => {
  res.status(200).send('About');
});

app.get('/api/products', (req, res) => {
  res.status(200).send('Products');
});
app.get('/api/items', (req, res) => {
  res.status(200).send('Items');
});

app.listen(5000, () => {
  console.log('server is listening on port 5000....');
});
