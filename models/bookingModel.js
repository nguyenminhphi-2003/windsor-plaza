import { Schema, model } from 'mongoose';

const bookingSchema = new Schema({
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
      message: 'Status is either: booked, checked-in, checked-out, or expired',
    },
    default: 'booked',
  },
},
{
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
},);

bookingSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'user',
    select: 'name email phoneNumber',
  }).populate({
    path: 'room',
    select: 'name status',
  });
  next();
});

const Booking = model('Booking', bookingSchema);
export default Booking;
