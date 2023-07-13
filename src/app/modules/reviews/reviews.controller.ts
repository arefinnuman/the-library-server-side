import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../functions/catchAsync';
import sendResponse from '../../../functions/sendResponse';
import { ReviewsService } from './reviews.service';

const createReviews = catchAsync(async (req: Request, res: Response) => {
  const { ...productData } = req.body;
  const result = await ReviewsService.createReviews(productData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Reviews Created Successfully',
    data: result,
  });
});

const getReviews = catchAsync(async (req: Request, res: Response) => {
  const bookId = req.params.id;
  const result = await ReviewsService.getReviews(bookId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Reviews Fetched Successfully',
    data: result,
  });
});

export const ReviewsController = {
  createReviews,
  getReviews,
};
