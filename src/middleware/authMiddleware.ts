import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel';
import { AuthenticatedRequest, IUser } from '../interfaces/userInterface';
import { NextFunction, Response } from 'express';
import { JWT_SECRET } from '../config/env';

const protect = asyncHandler(
  async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    let token;

    token = req.cookies.jwt;

    if (token) {
      try {
        const decoded = jwt.verify(token, JWT_SECRET) as { userId: any };

        req.user = (await User.findById(decoded.userId).select(
          '-password'
        )) as IUser;

        next();
      } catch (error) {
        throw new Error('Not authorized, invalid token');
      }
    } else {
      res.status(401);
      throw new Error('Not authorized, no token');
    }
  }
);

export { protect };
