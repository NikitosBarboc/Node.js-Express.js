import express from 'express';
import {
  getPeople, createPerson, updatePerson, deletePerson, createPersonPostman,
} from './controllers/people';

const peopleRouter = express.Router();

peopleRouter.route('/').get(getPeople).post(createPerson);
peopleRouter.route('/postman').post(createPersonPostman);
peopleRouter.route('/:id').put(updatePerson).delete(deletePerson);

export default peopleRouter;
