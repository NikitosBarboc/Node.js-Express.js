import express from 'express';
import { products } from '../../../data';

const getProduct = (req: express.Request, res: express.Response) => {
  res.status(200).json({ success: true, data: products });
};
const createProduct = (req: express.Request, res: express.Response) => {
  const { name, price, image } = req.body;
  if (!name || !price || !image) {
    res.status(400).json({
      success: false,
      msg: 'Please provide all necessary attributes',
    });
    return;
  }
  const isExist = products.some((product) => product.name === name);

  if (isExist) {
    res.status(400).json({
      success: false,
      msg: 'This product already exist',
    });
    return;
  }

  res.status(200).json({ success: true, data: [...products, { name, price, image }] });
};

const updateProduct = (req: express.Request, res: express.Response) => {
  const { name, price, image } = req.body;

  if (!name && !price && !image) {
    res.status(400).json({
      success: false,
      msg: 'Please provide at least one necessary attribute',
    });
    return;
  }
  const isExist = products.some((product) => product.id === Number(req.params.productId));

  if (!isExist) {
    res.status(404).json({
      success: false,
      msg: 'This product does not exist',
    });
    return;
  }
  const newProducts = products.map((product) => {
    if (product.id === Number(req.params.productId)) {
      return {
        ...product, ...req.body,
      };
    }
    return product;
  });

  res.status(200).json({ success: true, data: newProducts });
};

const deleteProduct = (req: express.Request, res: express.Response) => {
  const isExist = products.some((product) => product.id === Number(req.params.productId));

  if (!isExist) {
    res.status(404).json({
      success: false,
      msg: 'This product does not exist',
    });
    return;
  }
  const newProducts = products.filter((product) => product.id !== Number(req.params.productId));

  res.status(200).json({ success: true, data: newProducts });
};

export {
  getProduct, createProduct, updateProduct, deleteProduct,
};
