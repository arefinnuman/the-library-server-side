import { Schema, model } from 'mongoose';
import { IWishList, WishListModel } from './wishList.interface';

const WishListSchema = new Schema<IWishList>(
  {
    status: {
      type: Boolean,
      default: false,
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

export const WishList = model<IWishList, WishListModel>(
  'WishList',
  WishListSchema,
);
