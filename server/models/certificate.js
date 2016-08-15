'use strict';

var mongoose = require('mongoose');

var CertificateSchema = new mongoose.Schema({
  number: { type: String, required: true },
  date:   { type: Date, required: true },
  issuer: { type: String }
});

module.exports = mongoose.model('Certificate', CertificateSchema);
