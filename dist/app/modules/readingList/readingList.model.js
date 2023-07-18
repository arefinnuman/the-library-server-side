"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadingList = void 0;
const mongoose_1 = require("mongoose");
const ReadingListSchema = new mongoose_1.Schema({
    status: {
        type: Boolean,
        default: false,
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    book: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Book',
        required: true,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.ReadingList = (0, mongoose_1.model)('ReadingList', ReadingListSchema);
