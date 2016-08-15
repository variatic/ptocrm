'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ParticipantSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['client', 'contractor', 'project', 'subcontractor'],
    required: true
  },
  contractor: {
    type: Schema.Types.ObjectId,
    ref: 'Contractor',
    required: true
  },
  members: [{
    person: {
      type: Schema.Types.ObjectId,
      ref: 'Person'
    },
    documents: [{
      name:   { type: String },
      number: { type: String },
      date:   { type: Date },
      extra:  { type: String }
    }]
  }]
});

module.exports = mongoose.model('Participant', ParticipantSchema);

