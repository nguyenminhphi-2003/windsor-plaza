import { Schema, model } from 'mongoose';
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

billSchema.post('save', async function () {
  const room = await Room.findById(this.room);
  this.total = room.type.price;
  this.save();
});

const Bill = model('Bill', billSchema);
export default Bill;
