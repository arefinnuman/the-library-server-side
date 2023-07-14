import express from 'express';
import { ReadingListController } from './readingList.controller';

const routes = express.Router();

routes.post('/create-readingList', ReadingListController.createReadingList);

routes.get('/:id', ReadingListController.getReadingList);

routes.patch('/:id', ReadingListController.markAsRead);

routes.get('/marked-as-read/:id', ReadingListController.getMarkedAsRead);

export const ReadingListRoutes = routes;
