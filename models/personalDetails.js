const mongoose = require('mongoose');
const { Schema } = mongoose;

const personalDetailsSchema = new Schema({
  title: {
    type: String,
    enum: ['Mr.', 'Dr.', 'Ms.', 'Engr.']
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other']
  },
  maritalStatus: {
    type: String,
    enum: ['Single', 'Married']
  },
  dateOfBirth: {
    type: Date
  },
  fatherName: {
    type: String
  },
  country: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  cnic: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
},
{timestamps: true}
);

const PersonalDetails = mongoose.model('PersonalDetails', personalDetailsSchema, "pesonalDetails");

module.exports = PersonalDetails;
