const mongoose = require('mongoose');
const { Schema } = mongoose;

const educationDetailsSchema = new Schema({
  userCnic: {
    type: String,
    required: true,
  },
  qualificationLevel: {
    type: String,
  },
  education: {
    type: String,
  },
  startDate: {
    type: String,
  },
  currentlyEnrolled: {
    type: String,
  },
  expectedEndDate: {
    type: String,
  },
  nameOnDegree: {
    type: String,
  },
  country: {
    type: String,
  },
  degreeAwardInstitute: {
    type: String,
  },
  programTitle: {
    type: String,
  },
  universityName: {
    type: String,
  },
  campus: {
    type: String,
  },
  department: {
    type: String,
  },
  degreeType: {
    type: String,
  },
  sessionType: {
    type: String,
  },
  areaOfResearch: {
    type: String,
  },
  rollNo: {
    type: String,
  }
},
{timestamps: true}
);

const EducationDetails = mongoose.model('EducationDetails', educationDetailsSchema,'educationDetails');

module.exports = EducationDetails;



// test data
// {
//   "userCnic" : "34201",
//   "qualificationLevel" : "BS",
//   "education" : "14 Years",
//   "startDate" : "12/7/2019",
//   "currentlyEnrolled" : "Yes",
//   "expectedEndDate" : "12/9/2023",
//   "nameOnDegree" : "M Qasim",
//   "country" : "Pakistan",
//   "degreeAwardInstitute" : "UOG",
//   "programTitle" : "BS SE",
//   "universityName" : "UOG",
//   "campus" : "Hafiz Hayat",
//   "department" : "SE",
//   "degreeType" : "Regular",
//   "sessionType" : "Evening",
//   "areaOfResearch" : "Mobile Apps",
//   "rollNo" : "19014198-092"
// }
