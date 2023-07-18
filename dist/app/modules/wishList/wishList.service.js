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
exports.WishListService = void 0;
const wishList_model_1 = require("./wishList.model");
const createWishList = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = (yield (yield wishList_model_1.WishList.create(payload)).populate('user')).populate('book');
    return result;
});
const getWishList = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield wishList_model_1.WishList.find({
        user: userId,
        status: false,
    }).populate('book');
    return result;
});
exports.WishListService = {
    createWishList,
    getWishList,
};
