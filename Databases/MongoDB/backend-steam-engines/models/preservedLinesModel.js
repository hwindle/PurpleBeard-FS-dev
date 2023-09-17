'use strict';

const mongoose = require('mongoose');

// heritage railways schema - 1 mile+ in length (standard gauge)
const preservedLineSchema = new mongoose.Schema({
  name: String,
  country: String,
  area: String,
  county: String,
  address: String,
  miles: Number,
  sengines: Number,
  description: String,
  image: String,
  startyear: String,
  website: String,
});

const preservedLineModel = mongoose.model('preservedLines', preservedLineSchema);

module.exports = { preservedLineModel };