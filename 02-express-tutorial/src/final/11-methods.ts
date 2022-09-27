/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
import express from 'express';
import path from 'path';
import { people } from '../data';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.resolve(__dirname, './methods-public')));

app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post('/api/people', (req, res) => {
  const { name } = req.body;
  console.log(name, req.body);
  if (!name) {
    res.status(400).json({ success: false, msg: 'please provide name value' });
    return;
  }
  res.status(201).send({ success: true, person: name });
});

app.post('/login', (req, res) => {
  const { name } = req.body;
  if (name) {
    res.status(200).send(`Welcome ${name}`);
    return;
  }
  res.status(401).send('Please Provide name');
});

app.post('/api/postman/people', (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ success: false, msg: 'please provide name value' });
    return;
  }
  res.status(201).send({ success: true, data: [...people, name] });
});

app.put('/api/people/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    res.status(400).json({ success: false, msg: `Sorry no person with id ${id}` });
  } else {
    const newPeople = people.map((person) => {
      if (person.id === Number(id)) {
        return { ...person, name };
      }
      return person;
    });
    res.status(200).json({ success: true, data: newPeople });
  }
});

app.delete('/api/people/:id', (req, res) => {
  const { id } = req.params;
  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    res.status(400).json({ success: false, msg: `Sorry no person with id ${id}` });
  } else {
    const newPeople = people.filter((person) => person.id !== Number(id));
    res.status(200).json({ success: true, data: newPeople });
  }
});

app.listen(5000, () => {
  console.log('server is listening on port 5000....');
});
