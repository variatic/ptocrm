'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ActSchema = new mongoose.Schema({
  type:   {
    type: String,
    enum: ['hidden-works'],
    required: true
  },

  // Объект
  construction: {
    type: Schema.Types.ObjectId,
    ref: 'Construction',
    required: true
  },

  // Участники
  participants: [{
    contractor: {
      type: Schema.Types.ObjectId,
      ref: 'Contractor'
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
  }],

  // Реквизиты акта
  number:       { type: String, required: true }, // Номер
  date:         { type: Date, required: true },   // Дата
  record:       { type: String },                 // Ведомость

  // Работы
  works: [{
    inspected_by: [{ type: String, required: true }],
    date_start:   { type: Date },
    date_end:     { type: Date },
    items:        [{
      name:      { type: String, required: true },
      info:      { type: String, required: true },
      materials: [{
        name:     { type: String, required: true },
        quantity: {
          value: { type: Number, required: true },
          unit:  { type: String, required: true }
        },
        docs:     [{ type: String, required: true }]
      }]
    }]
  }]
});

module.exports = mongoose.model('Act', ActSchema);
