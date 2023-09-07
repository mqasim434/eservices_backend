const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema({
  University_Name: String,
  Degree_Template: String,
  Trascript_Template: String,
  Provisional_Template: String,
  Equivalance_Template: String,
});

module.exports = mongoose.model('Template', templateSchema, 'templates');
