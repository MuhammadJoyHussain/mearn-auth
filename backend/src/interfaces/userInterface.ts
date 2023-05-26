import { Request } from 'express';
import mongoose from 'mongoose';

export interface IUser {
  _id: mongoose.Types.ObjectId;
  name: string;
  email: string;
  password: string;
  matchPassword(enteredPassword: string): Promise<boolean>;
  timestamps: string;
}

export interface AuthenticatedRequest extends Request {
  user?: IUser;
}
