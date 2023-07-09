const mongoose = require('mongoose');
const { Schema } = mongoose;

const contactDetailsSchema = new Schema({
  country: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  district: {
    type: String
  },
  address: {
    type: String
  },
  postalCode: {
    type: String
  },
  email: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  phoneNumber: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
},
{timestamps: true}
);

const ContactDetails = mongoose.model('ContactDetails', contactDetailsSchema,'contactDetails');

module.exports = ContactDetails;
