import { Model, Types } from 'mongoose';
import { IUser } from '../user/user.interface';

export type IBook = {
  title: string;
  author: string;
  publicationDate: string;
  genre: string;
  image: string;
  createdUser: Types.ObjectId | IUser;
};

export type BookModel = Model<IBook, Record<string, unknown>>;
