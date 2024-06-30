import { Schema, model } from 'mongoose';

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

roomSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'type',
    select: 'name',
  });

  next();
});

const Room = model('Room', roomSchema);
export default Room;
