"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const authorization_1 = __importDefault(require("../../middleWares/authorization"));
const book_controller_1 = require("./book.controller");
const routes = express_1.default.Router();
routes.post('/create-book', book_controller_1.BookController.createBook);
routes.get('/:id', book_controller_1.BookController.getSingleBook);
routes.get('/', book_controller_1.BookController.getBook);
routes.patch('/:id', (0, authorization_1.default)(), book_controller_1.BookController.updateBook);
routes.delete('/:id', (0, authorization_1.default)(), book_controller_1.BookController.deleteBook);
exports.BookRoutes = routes;
