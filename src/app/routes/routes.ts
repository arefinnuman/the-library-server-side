import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.routes';
import { BookRoutes } from '../modules/book/book.routes';
import { ReadingListRoutes } from '../modules/readingList/readingList.routes';
import { ReviewRoutes } from '../modules/reviews/reviews.routes';

const router = express.Router();
const moduleRoutes = [
  {
    path: '/auth/',
    route: AuthRoutes,
  },
  {
    path: '/books/',
    route: BookRoutes,
  },
  {
    path: '/reviews/',
    route: ReviewRoutes,
  },
  {
    path: '/reading-list/',
    route: ReadingListRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
