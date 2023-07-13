import { IReviews } from './reviews.interface';
import { Reviews } from './reviews.model';

const createReviews = async (payload: IReviews): Promise<IReviews | null> => {
  const result = (
    await (await Reviews.create(payload)).populate('user')
  ).populate('book');
  return result;
};

export const ReviewsService = {
  createReviews,
};
