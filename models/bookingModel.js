import { Schema, model } from 'mongoose';
import { MyError } from '../utils/MyError.js';

const bookingSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User is required'],
    },
    room: {
      type: Schema.Types.ObjectId,
      ref: 'Room',
      required: [true, 'Room is required'],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    checkIn: {
      type: Date,
      required: [true, 'Check-in date is required'],
    },
    checkOut: {
      type: Date,
      required: [true, 'Check-out date is required'],
    },
    status: {
      type: String,
      enum: {
        values: ['booked', 'checked-in', 'checked-out', 'expired'],
        message:
          'Status is either: booked, checked-in, checked-out, or expired',
      },
      default: 'booked',
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

bookingSchema.pre(/^find/, async function (next) {
  // Populate user and room fields
  this.populate({
    path: 'user',
    select: 'name email phone',
  }).populate({
    path: 'room',
    select: 'name status',
  });

  // Update status of expired bookings
  const now = new Date();
  await this.model.updateMany(
    { checkOut: { $lt: now }, status: { $ne: 'expired' } },
    { status: 'expired' },
  );
  next();
});

bookingSchema.pre('save', function (next) {
  // Check if check-out date is after check-in date
  if (this.isModified('checkOut') || this.isModified('checkIn')) {
    if (this.checkIn >= this.checkOut) {
      return next(new MyError('Check-out date must be after check-in date'));
    }
  }
  next();
});

const Booking = model('Booking', bookingSchema);
export default Booking;
