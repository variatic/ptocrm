'use strict';

var db         = require('../helpers/db');
var error      = require('../helpers/db').error;
var success    = require('../helpers/db').success;
var Person     = require('../models/person');
var Contractor = require('../models/contractor');

exports.index  = function (req, res, next) {
  Person.find()
    .populate('_contractor')
    .exec(function (err, data) {
      if (err) return next(error(err));
      res.json(success(data));
    });
};
exports.view   = function (req, res, next) {
  Person.findById(req.params.id, function (err, data) {
    if (err || !data) return next(error(err));
    res.json(success(data));
  });
};
exports.create = function (req, res, next) {
  var body = req.body || {};
  var data = {
    number:       body.number,
    date:         body.date,
    register:     body.register,
    construction: body.construction
  };

  var model = new Person(data);
  model.save(function (err, data) {
    if (err) return next(error(err));
    res.json(success());
  });
};
exports.update = function (req, res, next) {
  var body = req.body || {};
  var data = {
    number:       body.number,
    date:         body.date,
    register:     body.register,
    construction: body.construction
  };

  Person.findByIdAndUpdate(req.params.id, data, function (err, result) {
    if (err || !result) return next(error(err));
    res.json(success());
  });
};
exports.delete = function (req, res, next) {
  Person.findByIdAndRemove(req.params.id, function (err) {
    if (err) return next(error(err));
    res.json(success());
  });
};
