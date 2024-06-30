import RoomType from '../models/roomTypeModel.js';
import catchAsync from '../utils/catchAsync.js';
import { MyError } from '../utils/MyError.js';

const roomTypeController = {
  getAllRoomTypes: catchAsync(async (req, res) => {
    const roomTypes = await RoomType.find();

    res.status(200).json({
      status: 'success',
      results: roomTypes.length,
      data: {
        roomTypes,
      },
    });
  }),

  getRoomTypeById: catchAsync(async (req, res) => {
    const roomType = await RoomType.findById(req.params.id);

    if (!roomType) {
      return new MyError('No room type found.', 404);
    }

    res.status(200).json({
      status: 'success',
      data: {
        roomType,
      },
    });
  }),

  createRoomType: catchAsync(async (req, res) => {
    const newRoomType = await RoomType.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        roomType: newRoomType,
      },
    });
  }),

  updateRoomType: catchAsync(async (req, res) => {
    const roomType = await RoomType.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!roomType) {
      return new MyError('No room type found with that ID.', 404);
    }

    res.status(200).json({
      status: 'success',
      data: {
        roomType,
      },
    });
  }),

  deleteRoomType: catchAsync(async (req, res) => {
    const roomType = await RoomType.findByIdAndDelete(req.params.id);
    
    if (!roomType) {
      return new MyError('No room type found with that ID.', 404);
    }

    res.status(204).json({
      status: 'success',
    });
  }),
};

export default roomTypeController;
