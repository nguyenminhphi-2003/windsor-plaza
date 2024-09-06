import User from '../models/userModel.js';
import catchAsync from '../utils/catchAsync.js';
import { MyError } from '../utils/MyError.js';

const filterObj = (obj, ...allowedField) => {
  const newObj = {};

  Object.keys(obj).forEach((el) => {
    if (allowedField.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

const userController = {
  getAllUsers: catchAsync(async (req, res) => {
    const users = await User.find();
    res.status(200).json({
      status: 'success',
      results: users.length,
      data: {
        users,
      },
    });
  }),

  // DO NOT USE THIS FUNCTION IN PRODUCTION
  // createUser: catchAsync(async (req, res) => {
  //   const newUser = await User.create(req.body);

  //   res.status(201).json({
  //     status: 'success',
  //     data: {
  //       user: newUser,
  //     },
  //   });
  // }),

  getMe: catchAsync(async (req, res, next) => {
    req.params.id = req.user.id;
    next();
  }),

  updateMe: catchAsync(async (req, res, next) => {
    if (req.body.password || req.body.passwordConfirm) {
      return next(
        new MyError(
          'This route is not for password updates. Please use /updateMyPassword.',
          400,
        ),
      );
    }

    // Filter fields
    const filteredBody = filterObj(req.body, 'name', 'email');

    const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: 'success',
      user: updatedUser,
    });
  }),

  deleteMe: catchAsync(async (req, res, next) => {
    await User.findByIdAndUpdate(req.user.id, { active: false });

    res.status(204).json({
      status: 'success'
    });
  }),

  getUserById: catchAsync(async (req, res, next) => {
    const user = await User.findById(req.params.id);
    if (!user) {
      return next(new MyError('No user found with that ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        user,
      },
    });
  }),

  updateUser: catchAsync(async (req, res, next) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return next(new MyError('No user found with that ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        user,
      },
    });
  }),

  deleteUser: catchAsync(async (req, res, next) => {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return next(new MyError('No user found with that ID', 404));
    }

    res.status(204).json({
      status: 'success',
      data: null,
    });
  }),
};

export default userController;
