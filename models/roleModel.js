import { Schema, model } from 'mongoose';

const roleSchema = new Schema(
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
    permissions: [
      {
        type: Schema.ObjectId,
        ref: 'Permission',
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

roleSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'permissions',
    select: 'name',
  });
  next();
});

const Role = model('Role', roleSchema);
export default Role;
