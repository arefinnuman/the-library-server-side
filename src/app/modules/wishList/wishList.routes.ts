import express from 'express';
import { WishListController } from './wishList.controller';

const routes = express.Router();

routes.post('/create-wishList', WishListController.createWishList);

routes.get('/:id', WishListController.getWishList);

export const WishListRoutes = routes;
