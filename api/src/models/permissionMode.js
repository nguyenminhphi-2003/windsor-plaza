import { Schema, model } from 'mongoose';

const permissionSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'A role must have a name'],
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'A role must have a description'],
      trim: true,
    },
    role: {
      type: Schema.ObjectId,
      ref: 'Role',
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

const Permission = model('Permission', permissionSchema);
export default Permission;