const mongoose = require('mongoose');
const { Schema } = mongoose;

const educationDetailsSchema = new Schema({
  qualificationLevel: {
    type: String,
    required: true
  },
  education: {
    type: String,
    enum: ['complete', 'incomplete'],
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  currentlyEnrolled: {
    type: Boolean,
    default: false,
    required: true
  },
  expectedEndDate: {
    type: Date,
    required: true
  },
  nameOnDegree: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  degreeAwardInstitute: {
    type: String,
    required: true
  },
  programTitle: {
    type: String,
    required: true
  },
  universityName: {
    type: String,
    required: true
  },
  campus: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  degreeTitle: {
    type: String,
    required: true
  },
  sessionType: {
    type: String,
    required: true
  },
  areaOfResearch: {
    type: String,
    required: true
  }
},
{timestamps: true}
);

const EducationDetails = mongoose.model('EducationDetails', educationDetailsSchema,'educationDetails');

module.exports = EducationDetails;
