"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadingListService = void 0;
const readingList_model_1 = require("./readingList.model");
const createReadingList = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = (yield (yield readingList_model_1.ReadingList.create(payload)).populate('user')).populate('book');
    return result;
});
const getReadingList = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield readingList_model_1.ReadingList.find({
        user: userId,
        status: false,
    }).populate('book');
    return result;
});
const markAsRead = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield readingList_model_1.ReadingList.findOneAndUpdate({ book: id }, { status: true }, { new: true });
    return result;
});
const getMarkedAsRead = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield readingList_model_1.ReadingList.find({
        user: userId,
        status: true,
    }).populate('book');
    return result;
});
exports.ReadingListService = {
    createReadingList,
    getReadingList,
    markAsRead,
    getMarkedAsRead,
};
