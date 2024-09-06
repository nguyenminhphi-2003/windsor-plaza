import { Schema, model } from 'mongoose';
import { MyError } from '../utils/MyError.js';
import Room from './roomModel.js';

const billSchema = new Schema(
  {
    room: {
      type: Schema.ObjectId,
      ref: 'Room',
      required: [true, 'A bill must belong to a room.'],
    },
    user: {
      type: Schema.ObjectId,
      ref: 'User',
    },
    total: {
      type: Number,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    descripton: {
      type: String,
      trim: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

billSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'room',
    select: 'name',
  }).populate({
    path: 'user',
    select: 'name phone',
  });
  next();
});

// Update total price
billSchema.pre('findOneAndUpdate', async function (next) {
  const update = this.getUpdate();
  if (update.room) {
    const room = await Room.findById(update.room);
    if (room) {
      update.total = room.type.price;
    }
  }
  next();
});

billSchema.pre('save', async function (next) {
  if (this.isModified('total')) return next();

  const room = await Room.findById(this.room);

  if (room.status === 'available') {
    return next(new MyError('Room must be in use to check out', 400));
  } else {
    room.status = 'available';
    await room.save();
  }
  next();
});

billSchema.post('save', async function () {
  const room = await Room.findById(this.room);
  if (room) {
    await this.updateOne({ total: room.type.price });
  }
});

const Bill = model('Bill', billSchema);
export default Bill;
