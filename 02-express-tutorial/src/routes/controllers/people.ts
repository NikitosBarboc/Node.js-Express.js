import express from 'express';
import { people } from '../../../data';

const getPeople = (req: express.Request, res: express.Response) => {
  res.status(200).json({ success: true, data: people });
};

const createPerson = (req: express.Request, res: express.Response) => {
  const { name } = req.body;
  console.log(name, req.body);
  if (!name) {
    res.status(400).json({ success: false, msg: 'please provide name value' });
    return;
  }
  res.status(201).send({ success: true, person: name });
};

const updatePerson = (req: express.Request, res: express.Response) => {
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
};

const deletePerson = (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    res.status(400).json({ success: false, msg: `Sorry no person with id ${id}` });
  } else {
    const newPeople = people.filter((person) => person.id !== Number(id));
    res.status(200).json({ success: true, data: newPeople });
  }
};

const createPersonPostman = (req: express.Request, res: express.Response) => {
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ success: false, msg: 'please provide name value' });
    return;
  }
  res.status(201).send({ success: true, data: [...people, name] });
};

export {
  getPeople, createPerson, updatePerson, deletePerson, createPersonPostman,
};
