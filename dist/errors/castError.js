"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CastError = (error) => {
    const errors = [
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
exports.default = CastError;
