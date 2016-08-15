'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MaterialSchema = new mongoose.Schema({
  name:     {
    type: String,
    required: true
  },
  quantity: {
    value: { type: Number, required: true },
    unit:  { type: String, required: true }
  },
  details:  [{
    type: String,
    required: true
  }]
});

module.exports = mongoose.model('MaterialSchema', MaterialSchema);
