import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import catchAsync from '../utils/catchAsync.js';
import { MyError } from '../utils/MyError.js';
import { promisify } from 'util';

const signToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user,
    },
  });
};

const authController = {
  signup: catchAsync(async (req, res) => {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    console.log(newUser._id);

    // 201: Created
    createSendToken(newUser, 201, res);
  }),

  login: catchAsync(async (req, res, next) => {
    const { email, password } = req.body;

    // Check if email and password exist
    if (!email || !password) {
      return next(new MyError('Please provide email and password', 400));
    }

    // Check if user exists && password is correct
    const user = await User.findOne({ email }).select('+password');
    if (!user || !(await user.correctPassword(password, user.password))) {
      // 401: Unauthorized
      return next(new MyError('Incorrect email or password', 401));
    }

    createSendToken(user, 200, res);
  }),

  protect: catchAsync(async (req, res, next) => {
    // Getting the token
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    } else {
      return next(new MyError('You are not logged in! Please log in.', 401));
    }

    // Verify token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    // Check user
    const user = await User.findById(decoded.id);
    if (!user)
      return next(
        new MyError('The user belong to this token does no longer exist.', 401),
      );

    // Grant access
    req.user = user;
    res.locals.user = user;
    next();
  }),

  checkPermit: (permission) => (req, res, next) => {
    if (req.user.role.name === 'admin') return next();

    // Check if user has permission
    const permissions = req.user.role.permissions;
    const hasPermission = permissions.some((perm) => perm.name === permission);

    if (!hasPermission) {
      return next(
        new MyError('You do not have permission to perform this action.', 403),
      );
    }

    return next();
  },
};

export default authController;
