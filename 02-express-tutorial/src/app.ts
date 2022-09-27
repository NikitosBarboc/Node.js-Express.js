import express from 'express';
import path from 'path';
import router from './routes/people';
import loginRouter from './routes/auth';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.resolve(__dirname, './methods-public')));

app.use('/api/people', router);
app.use('/login', loginRouter);

app.listen(5000, () => {
  console.log('server is listening on port 5000....');
});
