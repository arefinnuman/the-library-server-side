import express from 'express';
import { ReviewsController } from './reviews.controller';

const routes = express.Router();

routes.post('/create-review', ReviewsController.createReviews);

routes.get('/:id', ReviewsController.getReviews);

export const ReviewRoutes = routes;
