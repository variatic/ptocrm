'use strict';

var config         = require('config');
var express        = require('express');
var logger         = require('morgan');
var multer         = require('multer');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var mongoose       = require('mongoose');
var passport       = require('./config/passport');

var app  = express();
var port = process.env.PORT || 8080;

// Database
mongoose.connect(config.get('mongoose.url'));

var db = mongoose.connection;
db.on('error', function(err) {
  throw new Error('[DB] ' + err.message);
});
db.once('open', function() {
  console.log('DB connection open');

  process.on('SIGINT', function() {
    db.close(function () {
      console.log('Mongoose disconnected through app termination');
      process.exit(0);
    });
  });
});

app.use(logger('dev'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
app.use(bodyParser.json());
app.use(methodOverride('_method'));

// API
var api = '/api/v1';
app.use(api + '/acts', require('./routes/acts'));
app.use(api + '/people', require('./routes/people'));

// Error handlers
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    success: false,
    error: {
      status: err.status || 500,
      type: err.type || 'general',
      code: err.code || 0,
      message: err.message,
      errors: err.errors || []
    }
  });
});

// Start server
app.listen(port);

module.exports = app;
