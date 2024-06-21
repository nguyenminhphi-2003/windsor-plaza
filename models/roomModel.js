import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A room must have a name'],
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    imageCover: {
      type: String,
      required: [true, 'A room must have a cover image'],
    },
    images: [String],
    price: {
      type: Number,
      required: [true, 'A room must have a price'],
    },
    capacity: {
      type: Number,
      required: [true, 'A room must have a capacity'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

const Room = mongoose.model('Room', roomSchema);
export default Room;
