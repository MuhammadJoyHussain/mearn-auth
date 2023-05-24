import { Request } from 'express';

export interface IUser {
  name: string;
  email: string;
  password: string;
  matchPassword(enteredPassword: string): Promise<boolean>;
  timestamps: string;
}

export interface AuthenticatedRequest extends Request {
  user?: IUser;
}
