"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_routes_1 = require("../modules/auth/auth.routes");
const book_routes_1 = require("../modules/book/book.routes");
const readingList_routes_1 = require("../modules/readingList/readingList.routes");
const reviews_routes_1 = require("../modules/reviews/reviews.routes");
const wishList_routes_1 = require("../modules/wishList/wishList.routes");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/auth/',
        route: auth_routes_1.AuthRoutes,
    },
    {
        path: '/books/',
        route: book_routes_1.BookRoutes,
    },
    {
        path: '/reviews/',
        route: reviews_routes_1.ReviewRoutes,
    },
    {
        path: '/reading-list/',
        route: readingList_routes_1.ReadingListRoutes,
    },
    {
        path: '/wish-list/',
        route: wishList_routes_1.WishListRoutes,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
