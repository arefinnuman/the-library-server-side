import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/paginationField';
import catchAsync from '../../../functions/catchAsync';
import sendResponse from '../../../functions/sendResponse';
import pick from '../../../interfaces/pick';
import { bookFilterableFields } from './book.constant';
import { IBook } from './book.interface';
import { BookService } from './book.service';

const createBook = catchAsync(async (req: Request, res: Response) => {
  const { ...bookData } = req.body;
  const result = await BookService.createBook(bookData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book Created Successfully',
    data: result,
  });
});

const getBook = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, bookFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);

  const result = await BookService.getBook(filters, paginationOptions);

  sendResponse<IBook[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Book Data Fetched Successfully`,
    meta: result.meta,
    data: result.data,
  });
});

const getSingleBook = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await BookService.getSingleBook(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Book data fetched successfully`,
    data: result,
  });
});

const updateBook = catchAsync(async (req: Request, res: Response) => {
  const userId = req.user?.userId;
  const id = req.params.id;
  const BookData = req.body;
  const result = await BookService.updateBook(id, userId, BookData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Book updated successfully`,
    data: result,
  });
});

const deleteBook = catchAsync(async (req: Request, res: Response) => {
  const userId = req.user?.userId;
  console.log(userId);
  const id = req.params.id;
  const result = await BookService.deleteBook(id, userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Book deleted successfully`,
    data: result || null,
  });
});

export const BookController = {
  createBook,
  getSingleBook,
  updateBook,
  deleteBook,
  getBook,
};
