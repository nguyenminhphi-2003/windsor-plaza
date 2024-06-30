import { Schema, model } from 'mongoose';

const RoomTypeSchema = new Schema(
  {
    name: {
      type: String,
      // enum: ['Twin', 'King', 'Queen'],
      // default: 'Twin',
      required: [true, 'A room type must have a name'],
      unique: true,
      trim: true,
    },
    price: {
      type: Number,
      required: [true, 'A room type must have a price'],
      set: (value) => parseFloat(value.toFixed(2)),
    },
    description: {
      type: String,
      required: [true, 'A room type must have a description'],
    },
    imageCover: {
      type: String,
      required: [true, 'A room type must have a cover image'],
    },
    images: [String],
    capacity: {
      type: Number,
      required: [true, 'A room type must have a capacity'],
    },
    status: {
      type: String,
      default: 'active',
      enum: ['active', 'inactive'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

const RoomType = model('RoomType', RoomTypeSchema);
export default RoomType;
