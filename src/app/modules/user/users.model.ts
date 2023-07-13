/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-this-alias */
import bcrypt from 'bcrypt';
import { Schema, model } from 'mongoose';
import config from '../../../config/config';
import { IUser, UserModel } from './user.interface';

const userSchema = new Schema<IUser, UserModel>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['admin', 'seller', 'customer'],
      default: 'customer',
    },
    name: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
      },
    },

    gender: {
      type: String,
      enum: ['male', 'female'],
      required: true,
    },

    dateOfBirth: {
      type: String,
      required: true,
    },

    contactNo: {
      type: String,
      required: true,
    },

    emergencyContactNo: {
      type: String,
      required: true,
    },

    bloodGroup: {
      type: String,
      enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    },

    presentAddress: {
      type: String,
      required: true,
    },

    permanentAddress: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

userSchema.statics.isUserExist = async function (
  email: string,
): Promise<Pick<IUser, 'id' | 'email' | 'password' | 'role'> | null> {
  return await User.findOne({ email }, { email: 1, password: 1, role: 1 });
};

userSchema.statics.isPasswordMatched = async function (
  givenPassword: string,
  savedPassword: string,
): Promise<boolean> {
  return await bcrypt.compare(givenPassword, savedPassword);
};

userSchema.pre('save', async function (next) {
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

export const User = model<IUser, UserModel>('User', userSchema);
