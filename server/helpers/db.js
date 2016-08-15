'use strict';

exports.error = function(err) {
  var error = new Error();
  error.type = 'db';

  if (err) {
    console.log(err);

    error.code = err.code || 0;
    error.message = err.message;
  } else {
    error.code = 0;
    error.status = 404;
    error.message = 'Not Found';
  }

  return error;
};

exports.success = function(data) {
  return {
    success: true,
    data: data
  };
};
