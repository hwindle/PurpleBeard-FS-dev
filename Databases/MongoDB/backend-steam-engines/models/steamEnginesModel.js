'use strict';

const mongoose = require('mongoose');


// steam engine schema
const engineSchema = new mongoose.Schema({
  designer: String,
  railwayCompany: String,
  startYear: String,
  endYear: String,
  decade: String,
  wheelbase: String,
  wikiUrl: String,
  imageUrl: String,
  name: String,
  description: String,
});

const engineModel = mongoose.model('engines', engineSchema);

module.exports = { engineModel };