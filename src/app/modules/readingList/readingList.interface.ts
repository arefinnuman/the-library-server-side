import { Model, Types } from 'mongoose';
import { IBook } from '../book/book.interface';
import { IUser } from '../user/user.interface';

export type IReadingList = {
  status: boolean;
  user: Types.ObjectId | IUser;
  book: Types.ObjectId | IBook;
};

export type ReadingListModel = Model<IReadingList, Record<string, unknown>>;
