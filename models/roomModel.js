import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A room must have a name'],
      unique: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ['available', 'booked', 'occupied', 'unclean'],
      default: 'available',
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

const Room = mongoose.model('Room', roomSchema);
export default Room;
