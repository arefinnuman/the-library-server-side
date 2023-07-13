// cast error
import mongoose from 'mongoose';
import { IGenericErrorMessage } from '../interface/genericErrorMessage';
import { IGenericErrorResponse } from '../interface/genericErrorResponse';

const CastError = (error: mongoose.Error.CastError): IGenericErrorResponse => {
  const errors: IGenericErrorMessage[] = [
    {
      path: error.path,
      message: `Invalid Id`,
    },
  ];

  const statusCode = 400;
  return {
    statusCode,
    message: 'Cast Error',
    errorMessages: errors,
  };
};

export default CastError;
