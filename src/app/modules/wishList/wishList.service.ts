import { IWishList } from './wishList.interface';
import { WishList } from './wishList.model';

const createWishList = async (
  payload: IWishList,
): Promise<IWishList | null> => {
  const result = (
    await (await WishList.create(payload)).populate('user')
  ).populate('book');
  return result;
};

const getWishList = async (userId: string): Promise<IWishList[]> => {
  const result = await WishList.find({
    user: userId,
    status: false,
  }).populate('book');
  return result;
};

export const WishListService = {
  createWishList,
  getWishList,
};
