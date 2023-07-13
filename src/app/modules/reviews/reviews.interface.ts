import { Model, Types } from 'mongoose';
import { IBook } from '../book/book.interface';
import { IUser } from '../user/user.interface';

export type IReviews = {
  review: string;
  user: Types.ObjectId | IUser;
  book: Types.ObjectId | IBook;
};

export type ReviewsModel = Model<IReviews, Record<string, unknown>>;
