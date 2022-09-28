import express from 'express';
import route from './routes/products';
import peopleRouter from './routes/people';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', route);
app.use('/api/people', peopleRouter);

app.get('/', (req, res) => {
  res.send('<h1>Hello</h1> <a href="/api">Api</a>');
});

app.listen(5000);
