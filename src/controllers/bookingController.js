import Booking from '../models/bookingModel.js';
import Room from '../models/roomModel.js';
import catchAsync from '../utils/catchAsync.js';
import { MyError } from '../utils/MyError.js';

const updateRoomStatus = async (roomId, status) => {
  const room = await Room.findByIdAndUpdate(
    roomId,
    { status },
    {
      new: true,
      runValidators: true,
    },
  );
};

const bookingController = {
  getAllBookings: catchAsync(async (req, res) => {
    const bookings = await Booking.find();

    res.status(200).json({
      status: 'success',
      results: bookings.length,
      data: {
        bookings,
      },
    });
  }),

  getBookingById: catchAsync(async (req, res, next) => {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return next(new MyError('No booking found with that ID.', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        booking,
      },
    });
  }),

  createBooking: catchAsync(async (req, res, next) => {
    const room = await Room.findById(req.body.room);

    if (room.status !== 'available')
      return next(
        new MyError('Room is not available, please choose another room.', 400),
      );

    const booking = await Booking.create(req.body);

    // Update room status
    updateRoomStatus(room._id, 'booked');

    res.status(201).json({
      status: 'success',
      data: {
        booking,
      },
    });
  }),

  updateBooking: catchAsync(async (req, res, next) => {
    const existingBooking = await Booking.findById(req.params.id);
    if (!existingBooking) {
      return next(new MyError('No booking found with that ID.', 404));
    }

    // Update booking
    const updatedBooking = await Booking.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      },
    );

    if (req.body.room && req.body.room !== existingBooking.room._id.toString()) {
      // Update old room's status
      updateRoomStatus(existingBooking.room, 'available');

      // Update  new room's status
      updateRoomStatus(req.body.room, 'booked');
    }

    res.status(200).json({
      status: 'success',
      data: {
        booking: updatedBooking,
      },
    });
  }),

  deleteBooking: catchAsync(async (req, res, next) => {
    const booking = await Booking.findByIdAndDelete(req.params.id);

    if (!booking) {
      return next(new MyError('No booking found with that ID.', 404));
    }

    // Update room status
    updateRoomStatus(booking.room, 'available');

    res.status(204).json({
      status: 'success',
      data: null,
    });
  }),
};

export default bookingController;
