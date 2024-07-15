import Role from '../models/roleModel.js';
import catchAsync from '../utils/catchAsync.js';
import { MyError } from '../utils/MyError.js';

const roleController = {
  getAllRoles: catchAsync(async (req, res, next) => {
    const roles = await Role.find();

    res.status(200).json({
      status: 'success',
      result: roles.length,
      data: {
        roles,
      },
    });
  }),

  getRoleById: catchAsync(async (req, res, next) => {
    const role = await Role.findById(req.params.id);

    if (!role) {
      return next(new MyError('No role found with that ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        role,
      },
    });
  }),

  createRole: catchAsync(async (req, res, next) => {
    const role = await Role.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        role,
      },
    });
  }),

  updateRole: catchAsync(async (req, res, next) => {
    const role = await Role.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!role) {
      return next(new MyError('No role found with that ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        role,
      },
    });
  }),

  deleteRole: catchAsync(async (req, res, next) => {
    const role = await Role.findByIdAndDelete(req.params.id);

    if (!role) {
      return next(new MyError('No role found with that ID', 404));
    }

    res.status(204).json({
      status: 'success',
      data: null,
    });
  }),
};
export default roleController;
