import { Schema, model } from 'mongoose';
import isEmail from 'validator/lib/isEmail.js';
import bcrypt from 'bcryptjs';

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'A user must have a name'],
    },
    email: {
      type: String,
      required: ['Please provide your email'],
      unique: true,
      lowercase: true,
      validate: [isEmail, 'Please enter a valid email'],
    },
    password: {
      type: String,
      required: [true, 'A user must have a password'],
      minlength: 8,
      select: false,
    },
    // passwordChangedAt: Date,
    // passwordResetToken: String,
    // passwordResetExpires: Date,
    phoneNumber: {
      type: String,
      required: [true, 'A user must have a phone number'],
    },
    active: {
      type: Boolean,
      default: true,
      select: false,
    },
    role: {
      type: Schema.ObjectId,
      ref: 'Role',
      default: '669f67124c3fe16d2e2dba72',
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

userSchema.pre(/^find/, function (next) {
  this.find({ active: { $ne: false } });

  this.populate({
    path: 'role',
    select: 'name',
  })
  next();
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// Method for password checking
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword,
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = model('User', userSchema);

export default User;
