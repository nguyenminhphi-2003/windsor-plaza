import Bill from '../models/billModel.js';
import catchAsync from '../utils/catchAsync.js';
import { MyError } from '../utils/MyError.js';

const billController = {
  getAllBills: catchAsync(async (req, res) => {
    const bills = await Bill.find();

    res.status(200).json({
      status: 'success',
      results: bills.length,
      data: {
        bills,
      },
    });
  }),

  getBillById: catchAsync(async (req, res, next) => {
    const bill = await Bill.findById(req.params.id);

    if (!bill) return new MyError('No bill found with that ID', 404);

    res.status(200).json({
      status: 'success',
      data: {
        bill,
      },
    });
  }),

  createBill: catchAsync(async (req, res) => {
    const bill = await Bill.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        bill,
      },
    });
  }),

  updateBill: catchAsync(async (req, res) => {
    const bill = await Bill.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!bill) return new MyError('No bill found with that ID', 404);

    res.status(200).json({
      status: 'success',
      data: {
        bill,
      },
    });
  }),

  deleteBill: catchAsync(async (req, res) => {
    const bill = await Bill.findByIdAndDelete(req.params.id);

    if (!bill) return new MyError('No bill found with that ID', 404);

    res.status(204).json({
      status: 'success',
      data: null,
    });
  }),
};

export default billController;
