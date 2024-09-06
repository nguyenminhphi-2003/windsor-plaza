import Permission from '../models/permissionMode.js';
import catchAsync from '../utils/catchAsync.js';
import { MyError } from '../utils/MyError.js';

const permissionController = {
  getAllPermissions: catchAsync(async (req, res, next) => {
    const permissions = await Permission.find();

    res.status(200).json({
      status: 'success',
      result: permissions.length,
      data: {
        permissions,
      },
    });
  }),

  getPermissionById: catchAsync(async (req, res, next) => {
    const permission = await Permission.findById(req.params.id);

    if (!permission) {
      return next(new MyError('No permission found with that ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        permission,
      },
    });
  }),

  createPermission: catchAsync(async (req, res, next) => {
    const permission = await Permission.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        permission,
      },
    });
  }),

  updatePermission: catchAsync(async (req, res, next) => {
    const permission = await Permission.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!permission) {
      return next(new MyError('No permission found with that ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        permission,
      },
    });
  }),

  deletePermission: catchAsync(async (req, res, next) => {
    const permission = await Permission.findByIdAndDelete(req.params.id);

    if (!permission) {
      return next(new MyError('No permission found with that ID', 404));
    }

    res.status(204).json({
      status: 'success',
      data: null,
    });
  }),
};
export default permissionController;
