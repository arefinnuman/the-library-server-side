import { IReadingList } from './readingList.interface';
import { ReadingList } from './readingList.model';

const createReadingList = async (
  payload: IReadingList,
): Promise<IReadingList | null> => {
  const result = (
    await (await ReadingList.create(payload)).populate('user')
  ).populate('book');
  return result;
};

const getReadingList = async (userId: string): Promise<IReadingList[]> => {
  const result = await ReadingList.find({
    user: userId,
    status: false,
  }).populate('book');
  return result;
};

const markAsRead = async (id: string): Promise<IReadingList | null> => {
  const result = await ReadingList.findOneAndUpdate(
    { book: id },
    { status: true },
    { new: true },
  );
  return result;
};

const getMarkedAsRead = async (userId: string): Promise<IReadingList[]> => {
  const result = await ReadingList.find({
    user: userId,
    status: true,
  }).populate('book');
  return result;
};

export const ReadingListService = {
  createReadingList,
  getReadingList,
  markAsRead,
  getMarkedAsRead,
};
