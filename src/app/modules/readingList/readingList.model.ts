import { Schema, model } from 'mongoose';
import { IReadingList, ReadingListModel } from './readingList.interface';

const ReadingListSchema = new Schema<IReadingList>(
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

export const ReadingList = model<IReadingList, ReadingListModel>(
  'ReadingList',
  ReadingListSchema,
);
