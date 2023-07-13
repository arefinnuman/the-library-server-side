import { IReviews } from './reviews.interface';
import { Reviews } from './reviews.model';

const createReviews = async (payload: IReviews): Promise<IReviews | null> => {
  const result = (
    await (await Reviews.create(payload)).populate('user')
  ).populate('book');
  return result;
};

const getReviews = async (bookId: string): Promise<IReviews[]> => {
  const result = await Reviews.find({ book: bookId });
  return result;
};

export const ReviewsService = {
  createReviews,
  getReviews,
};
