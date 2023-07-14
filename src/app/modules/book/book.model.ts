import { Schema, model } from 'mongoose';

import { BookModel, IBook } from './book.interface';

const BookSchema = new Schema<IBook>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    author: {
      type: String,
      required: true,
    },
    publicationDate: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    createdUser: {
      type: Schema.Types.ObjectId,
      ref: 'User',
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

export const Book = model<IBook, BookModel>('Book', BookSchema);
