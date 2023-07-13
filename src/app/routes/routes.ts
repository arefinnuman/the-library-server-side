import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.routes';
import { BookRoutes } from '../modules/book/book.routes';

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
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
