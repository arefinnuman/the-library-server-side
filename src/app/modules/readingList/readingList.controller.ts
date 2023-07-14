import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../functions/catchAsync';
import sendResponse from '../../../functions/sendResponse';
import { ReadingListService } from './readingList.service';

const createReadingList = catchAsync(async (req: Request, res: Response) => {
  const { ...productData } = req.body;
  const result = await ReadingListService.createReadingList(productData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'ReadingList Created Successfully',
    data: result,
  });
});

const getReadingList = catchAsync(async (req: Request, res: Response) => {
  const userId = req.params.id;
  const result = await ReadingListService.getReadingList(userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'ReadingList Fetched Successfully',
    data: result,
  });
});

const markAsRead = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await ReadingListService.markAsRead(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'ReadingList Created Successfully',
    data: result,
  });
});

const getMarkedAsRead = catchAsync(async (req: Request, res: Response) => {
  const userId = req.params.id;
  const result = await ReadingListService.getMarkedAsRead(userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'ReadingList Fetched Successfully',
    data: result,
  });
});

export const ReadingListController = {
  createReadingList,
  getReadingList,
  markAsRead,
  getMarkedAsRead,
};
