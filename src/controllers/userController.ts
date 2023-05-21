import { Request, Response } from "express";
import asyncHandler from "express-async-handler";

// @desc Auth user/set token
// route POST /api/user/auth
// @access Public
const authUser = asyncHandler(async (req: Request, res: Response) => {
    res.status(200).json({message: "Auth User"});
})

// @desc Register a new user
// route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req: Request, res: Response) => {
    res.status(200).json({message: "Register User"});
})

// @desc Logout user
// route POST /api/user/logout
// @access Public
const logoutUser = asyncHandler(async (req: Request, res: Response) => {
    res.status(200).json({message: "Logout User"});
})

// @desc Get user profile
// route Get /api/user/profile
// @access Public
const getUserProfile = asyncHandler(async (req: Request, res: Response) => {
    res.status(200).json({message: "User Profile"});
})

// @desc Update user 
// route Put /api/user/profile
// @access Public
const updateUser = asyncHandler(async (req: Request, res: Response) => {
    res.status(200).json({message: "Update User"});
})

export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUser
}