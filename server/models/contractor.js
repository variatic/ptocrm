'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContractorSchema = new mongoose.Schema({
  type:         {
    type: String,
    enum: ['entity', 'individual'],
    required: true
  },
  name:         { type: String, required: true },
  zip:          { type: String },
  address:      { type: String },
  phones:       [{
    type: String
  }],
  entity:       {
    ogrn: { type: String },
    inn:  { type: String }
  },
  individual:   {
    passport_series: { type: String },
    passport_number: { type: String }
  },
  certificates: [{
    type: Schema.Types.ObjectId,
    ref: 'Certificate'
  }]
});

module.exports = mongoose.model('Contractor', ContractorSchema);
