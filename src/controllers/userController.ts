import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken';
import User from '../models/userModel';

// @desc Auth user/set token
// route POST /api/user/auth
// @access Public
const authUser = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

// @desc Register a new user
// route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exist');
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// @desc Logout user
// route POST /api/user/logout
// @access Public
const logoutUser = asyncHandler(async (req: Request, res: Response) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: 'User logged out' });
});

// @desc Get user profile
// route Get /api/user/profile
// @access Public
const getUserProfile = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ message: 'User Profile' });
});

// @desc Update user
// route Put /api/user/profile
// @access Public
const updateUser = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ message: 'Update User' });
});

export { authUser, registerUser, logoutUser, getUserProfile, updateUser };
