// validation error
import mongoose from 'mongoose';
import { IGenericErrorMessage } from '../interface/genericErrorMessage';
import { IGenericErrorResponse } from '../interface/genericErrorResponse';

const ValidationError = (
  error: mongoose.Error.ValidationError,
): IGenericErrorResponse => {
  const errors: IGenericErrorMessage[] = Object.values(error.errors).map(
    (el: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: el?.path,
        message: el?.message,
      };
    },
  );
  const statusCode = 400;
  return {
    statusCode,
    message: 'Validation Error',
    errorMessages: errors,
  };
};

export default ValidationError;
