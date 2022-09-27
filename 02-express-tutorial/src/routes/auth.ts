import express from 'express';

const loginRouter = express.Router();

loginRouter.post('/', (req, res) => {
  const { name } = req.body;
  if (name) {
    res.status(200).send(`Welcome ${name}`);
    return;
  }
  res.status(401).send('Please Provide name');
  console.log(name, req.body);
});

export default loginRouter;
