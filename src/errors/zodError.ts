//  zod error
import { ZodError, ZodIssue } from 'zod';
import { IGenericErrorMessage } from '../interface/genericErrorMessage';
import { IGenericErrorResponse } from '../interface/genericErrorResponse';

const handleZodError = (error: ZodError): IGenericErrorResponse => {
  const errors: IGenericErrorMessage[] = error.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue?.message,
    };
  });
  const statusCode = 400;
  return {
    statusCode,
    message: 'Validation Error',
    errorMessages: errors,
  };
};
export default handleZodError;
