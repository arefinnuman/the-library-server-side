import express from 'express';
import { ReviewsController } from './reviews.controller';

const routes = express.Router();

routes.post('/create-review', ReviewsController.createReviews);

routes.get('/:id', ReviewsController.getReviews);

// routes.patch('/:id', Authorization(), BookController.updateBook);

// routes.delete('/:id', Authorization(), BookController.deleteBook);

export const ReviewRoutes = routes;
