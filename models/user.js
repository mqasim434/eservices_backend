const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      default: 'null',
    },
    lastName: {
      type: String,
      default: 'null',
    },
    fatherName: {
      type: String,
      default: 'null',
    },
    country: {
      type: String,
      default: 'null',
    },
    cnic: {
      type: String,
      unique: true,
      default: 'null',
    },
    phoneNo: {
      type: String,
      unique: true,
      default: 'null',
    },
    email: {
      type: String,
      unique: true,
      default: 'null',
    },
    maritalStatus: {
      type: String,
      default: 'null',
    },
    gender: {
      type: String,
      default: 'null',
    },
    password: {
      type: String,
      default: 'null',
    },
    confirmPassword: {
      type: String,
      default: 'null',
    },
    dateOfBirth: {
      type: String,
      default: '00/00/0000',
    },
    address: {
      type: String,
      default: 'null',
    },
    city: {
      type: String,
      default: 'null',
    },
    district: {
      type: String,
      defaul: 'null',
    },
    postalCode: {
      type: String,
      default: 'null',
    },
    imageUrl: {
      type: String,
      default: 'null',
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema, "users");

module.exports = User;
