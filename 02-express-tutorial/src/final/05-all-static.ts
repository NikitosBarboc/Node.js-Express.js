import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(path.resolve(__dirname, './public')));

app.all('*', (req, res) => {
  res.status(404).send('resource not found');
});

app.listen(5000, () => {
  console.log('server is listening on port 5000....');
});