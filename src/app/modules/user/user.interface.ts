/* eslint-disable no-unused-vars */

import { Document, Model } from 'mongoose';

export type UserName = {
  firstName: string;
  lastName: string;
  middleName: string;
};

export type IUser = Document & {
  email: string;
  password: string;
  role: string;
  name: UserName;
  gender: 'male' | 'female';
  dateOfBirth: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
};

export type UserModel = {
  isUserExist(
    email: string,
  ): Promise<Pick<IUser, 'id' | 'email' | 'password' | 'role'> | null>;
  isPasswordMatched(
    givenPassword: string,
    savedPassword: string,
  ): Promise<boolean>;
} & Model<IUser>;
