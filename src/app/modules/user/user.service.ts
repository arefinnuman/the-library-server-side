import httpStatus from 'http-status';
import mongoose from 'mongoose';
import ApiError from '../../../errors/apiError';
import { IUser } from './user.interface';
import { User } from './users.model';

const createUser = async (user: IUser): Promise<IUser | null> => {
  user.role = 'customer';
  const newUserAllData = null;
  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    const newCustomer = await User.create([user], { session });
    if (!newCustomer.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create customer');
    }

    await session.commitTransaction();
    await session.endSession();
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw error;
  }

  return newUserAllData;
};

export const UserService = {
  createUser,
};
