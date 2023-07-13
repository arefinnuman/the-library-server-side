import { IUser } from './user.interface';
import { User } from './users.model';

const createUser = async (user: IUser): Promise<IUser | null> => {
  user.role = 'customer';
  const result = await User.create(user);
  return result;
};

export const UserService = {
  createUser,
};
