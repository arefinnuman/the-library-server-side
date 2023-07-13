import { Schema, model } from 'mongoose';
import { IReviews, ReviewsModel } from './reviews.interface';

const ReviewsSchema = new Schema<IReviews>(
  {
    review: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    book: {
      type: Schema.Types.ObjectId,
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

export const Reviews = model<IReviews, ReviewsModel>('Reviews', ReviewsSchema);
