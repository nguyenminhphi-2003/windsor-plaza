import Room from '../models/roomModel.js';
import catchAsync from '../utils/catchAsync.js';
import { MyError } from '../utils/MyError.js';

const roomController = {
  getAllRooms: catchAsync(async (req, res) => {
    const rooms = await Room.find();

    res.status(200).json({
      status: 'success',
      results: rooms.length,
      data: {
        rooms,
      },
    });
  }),

  getRoomById: catchAsync(async (req, res) => {
    const room = await Room.findById(req.params.id);

    if (!room) return new MyError('No room found.', 404);

    res.status(200).json({
      status: 'success',
      data: {
        room,
      },
    });
  }),

  createRoom: catchAsync(async (req, res) => {
    const newRoom = await Room.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        room: newRoom,
      },
    });
  }),

  updateRoom: catchAsync(async (req, res) => {
    const room = await room.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!room) return new MyError('No room found with that ID.', 404);

    res.status(200).json({
      status: 'success',
      data: {
        room,
      },
    });
  }),

  deleteRoom: catchAsync(async (req, res) => {
    const room = await Room.findByIdAndDelete(req.params.id);

    if (!room) return new MyError('No room found with that ID.', 404);

    res.status(204).json({
      status: 'success',
    });
  }),
};

export default roomController;
