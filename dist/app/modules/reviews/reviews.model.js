'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.Reviews = void 0;
const mongoose_1 = require('mongoose');
const ReviewsSchema = new mongoose_1.Schema(
  {
    review: {
      type: String,
      required: true,
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
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);
exports.Reviews = (0, mongoose_1.model)('Reviews', ReviewsSchema);
