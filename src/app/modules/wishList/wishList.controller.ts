import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../functions/catchAsync';
import sendResponse from '../../../functions/sendResponse';
import { WishListService } from './wishList.service';

const createWishList = catchAsync(async (req: Request, res: Response) => {
  const { ...productData } = req.body;
  const result = await WishListService.createWishList(productData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'WishList Created Successfully',
    data: result,
  });
});

const getWishList = catchAsync(async (req: Request, res: Response) => {
  const userId = req.params.id;
  const result = await WishListService.getWishList(userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'WishList Fetched Successfully',
    data: result,
  });
});

export const WishListController = {
  createWishList,
  getWishList,
};
