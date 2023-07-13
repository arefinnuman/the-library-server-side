'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.ReviewRoutes = void 0;
const express_1 = __importDefault(require('express'));
const reviews_controller_1 = require('./reviews.controller');
const routes = express_1.default.Router();
routes.post(
  '/create-review',
  reviews_controller_1.ReviewsController.createReviews,
);
routes.get('/:id', reviews_controller_1.ReviewsController.getReviews);
// routes.patch('/:id', Authorization(), BookController.updateBook);
// routes.delete('/:id', Authorization(), BookController.deleteBook);
exports.ReviewRoutes = routes;
