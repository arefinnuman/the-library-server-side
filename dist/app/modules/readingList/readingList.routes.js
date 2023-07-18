"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadingListRoutes = void 0;
const express_1 = __importDefault(require("express"));
const readingList_controller_1 = require("./readingList.controller");
const routes = express_1.default.Router();
routes.post('/create-readingList', readingList_controller_1.ReadingListController.createReadingList);
routes.get('/:id', readingList_controller_1.ReadingListController.getReadingList);
routes.patch('/:id', readingList_controller_1.ReadingListController.markAsRead);
routes.get('/marked-as-read/:id', readingList_controller_1.ReadingListController.getMarkedAsRead);
exports.ReadingListRoutes = routes;
