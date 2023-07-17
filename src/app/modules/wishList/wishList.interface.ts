import { Model, Types } from 'mongoose';
import { IBook } from '../book/book.interface';
import { IUser } from '../user/user.interface';

export type IWishList = {
  status: boolean;
  user: Types.ObjectId | IUser;
  book: Types.ObjectId | IBook;
};

export type WishListModel = Model<IWishList, Record<string, unknown>>;
