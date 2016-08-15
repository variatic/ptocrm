'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PersonSchema = new mongoose.Schema({
  _contractor: {
    type: Schema.Types.ObjectId,
    ref: 'Contractor'
  },
  position:    { type: String, required: true },
  name:        { type: String, required: true },
  documents:   { type: String }
});

module.exports = mongoose.model('Person', PersonSchema, 'people');
