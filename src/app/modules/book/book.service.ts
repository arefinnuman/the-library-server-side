import httpStatus from 'http-status';
import { SortOrder } from 'mongoose';
import ApiError from '../../../errors/apiError';
import { PaginationHelpers } from '../../../helpers/paginationHelper';
import { IConstantFilters } from '../../../interfaces/constantFilters';
import { IGenericResponse } from '../../../interfaces/genericResponse';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { bookSearchableFields } from './book.constant';
import { IBook } from './book.interface';
import { Book } from './book.model';

const createBook = async (payload: IBook): Promise<IBook | null> => {
  const result = (await Book.create(payload)).populate('createdUser');
  return result;
};

const getBook = async (
  filters: Partial<IConstantFilters>,
  paginationOptions: IPaginationOptions,
): Promise<IGenericResponse<IBook[]>> => {
  const { searchTerm, ...filtersData } = filters;

  const andConditions: { [x: string]: unknown }[] = [];

  if (searchTerm) {
    andConditions.push({
      $or: bookSearchableFields.map((field: string) => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const { page, limit, skip, sortBy, sortOrder } =
    PaginationHelpers.calculatePagination(paginationOptions);

  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }

  const whereConditions =
    andConditions.length > 0
      ? {
          $and: andConditions,
        }
      : {};

  const result = await Book.find(whereConditions)
    .populate('createdUser')
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await Book.countDocuments();
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSingleBook = async (id: string): Promise<IBook | null> => {
  const result = await Book.findById(id).populate('createdUser');
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, `Book not found`);
  }
  return result;
};

const updateBook = async (
  id: string,
  userId: string,
  payload: Partial<IBook>,
): Promise<IBook | null> => {
  const book = await Book.findOne({ _id: id }).populate('createdUser');
  if (!book) {
    throw new ApiError(httpStatus.NOT_FOUND, `Book not found`);
  }
  const createdUserId = book.createdUser?._id.toString();

  if (createdUserId !== userId) {
    throw new ApiError(
      httpStatus.UNAUTHORIZED,
      'You are not authorized to update this Book',
    );
  }

  const result = await Book.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteBook = async (
  id: string,
  userId: string,
): Promise<IBook | null> => {
  const book = await Book.findOne({ _id: id }).populate('createdUser');
  if (!book) {
    throw new ApiError(httpStatus.NOT_FOUND, `Book not found`);
  }
  const createdUserId = book.createdUser?._id.toString();

  if (createdUserId !== userId) {
    throw new ApiError(
      httpStatus.UNAUTHORIZED,
      'You are not authorized to delete this Book',
    );
  }

  const result = await Book.findOneAndDelete({ _id: id }, { new: true });

  return result;
};

export const BookService = {
  createBook,
  getSingleBook,
  updateBook,
  deleteBook,
  getBook,
};
