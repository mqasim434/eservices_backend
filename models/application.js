const mongoose = require('mongoose');


const documentSchema = new mongoose.Schema({
  name: String,
  fileURL: String,
});

const degreeSchema = new mongoose.Schema({
  degreeName: String,
  documents: [documentSchema], // Array of documents for each degree
});

const userSchema = new mongoose.Schema({
  attestationMode: {
    type: String,
    required: true,
  },
  fromWhere: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  originalDocumentFee: {
    type: String,
    required: true,
  },
  photocopyDocumentFee: {
    type: String,
    required: true,
  },
  degrees: [degreeSchema], // Array of degrees
});

// Create the User model using the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
