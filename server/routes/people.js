'use strict';

var express    = require('express');
var controller = require('../controllers/people');
var router     = express.Router();

router.route('/')
  .get(controller.index)
  .post(controller.create)
  .delete(controller.delete);

router.route('/:id')
  .get(controller.view)
  .post(controller.update)
  .delete(controller.delete);

module.exports = router;
