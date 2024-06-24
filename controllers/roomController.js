import Room from '../models/roomModel.js';
import catchAsync from '../utils/catchAsync.js';

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
    const updatedRoom = await Room.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: 'success',
      data: {
        room: updatedRoom,
      },
    });
  }),

  deleteRoom: catchAsync(async (req, res) => {
    await Room.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
    });
  }),
};

export default roomController;
