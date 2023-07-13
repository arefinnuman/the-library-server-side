import express from 'express';
import Authorization from '../../middleWares/authorization';
import { BookController } from './book.controller';

const routes = express.Router();

routes.post('/create-book', BookController.createBook);

routes.get('/:id', BookController.getSingleBook);

routes.get('/', BookController.getBook);

routes.patch('/:id', Authorization(), BookController.updateBook);

routes.delete('/:id', Authorization(), BookController.deleteBook);

export const BookRoutes = routes;
