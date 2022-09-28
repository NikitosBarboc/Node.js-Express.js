import express from 'express';
import { products } from '../../data';
import {
  getProduct, createProduct, updateProduct, deleteProduct,
} from './controllers/products';

const route = express.Router();

route.get('/', (req, res) => {
  res.send(`<h1>welcome to api</h1>
    <a href="/api/people">people</a>
    <a href="/api/products">products</a>`);
});

route.route('/products').get(getProduct).post(createProduct);
route.route('/products').put(updateProduct).delete(deleteProduct);

export default route;
