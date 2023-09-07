const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dropdownSchema = new Schema({
  universities: [String],
  campuses: [String],
  qualificationLevels: [String],
  degrees: [String],
  departments: [String],
  sessions: [String],
  degreeTypes: [String],
});

const Dropdown = mongoose.model("Dropdown", dropdownSchema, "dropdowns");

module.exports = Dropdown;
