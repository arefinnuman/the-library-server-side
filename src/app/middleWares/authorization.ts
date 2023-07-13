/* eslint-disable no-unused-expressions */
import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import ApiError from '../../errors/apiError';
import { jwtHelpers } from '../../helpers/jwtHelpers';
import config from '../../config/config';

const Authorization =
  (...requiredRoles: string[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization;

      if (!token) {
        throw new ApiError(httpStatus.UNAUTHORIZED, 'you are not authorized');
      }

      let verifiedUser = null;
      verifiedUser = jwtHelpers.verifyToken(token, config.jwt.secret as Secret);

      req.user = verifiedUser;

      if (requiredRoles.length && !requiredRoles.includes(verifiedUser.role)) {
        throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden access');
      }
      next();
    } catch (error) {
      next(error);
    }
  };

export default Authorization;
