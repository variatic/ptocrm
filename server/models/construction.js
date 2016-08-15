'use strict';

var mongoose = require('mongoose');

var ConstructionSchema = new mongoose.Schema({
  name:    { type: String, required: true },
  address: { type: String }
});

module.exports = mongoose.model('Construction', ConstructionSchema);
