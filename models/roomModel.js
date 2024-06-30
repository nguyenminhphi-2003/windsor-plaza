import { Schema, model } from 'mongoose';
import RoomType from './roomTypeModel.js';
import { MyError } from '../utils/MyError.js';

const roomSchema = new Schema(
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
    type: {
      type: Schema.ObjectId,
      ref: 'RoomType',
      required: [true, 'A room must belong to a room type.'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

// Populate the room with the room type
roomSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'type',
    select: 'name price imageCover images capacity',
  });

  next();
});

// Validate the room type
roomSchema.pre('save', async function (next) {
  if (this.isModified('type')) {
    const roomType = await RoomType.findById(this.type);
    if (!roomType) {
      throw new MyError('Invalid Room Type ID: Room Type does not exist.', 404);
    }
  }
  next();
});

const Room = model('Room', roomSchema);
export default Room;
