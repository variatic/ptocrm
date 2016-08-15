'use strict';

var config       = require('config');
var mongoose     = require('mongoose');
var async        = require('async');
var Act          = require('../models/act');
var Certificate  = require('../models/certificate');
var Contractor   = require('../models/contractor');
var Construction = require('../models/construction');
var Participants = require('../models/participant');
var Person       = require('../models/person');

mongoose.connect(config.get('mongoose.url'));

var db = mongoose.connection;
db.on('error', function(err) {
  throw new Error('[DB] ' + err.message);
});
db.once('open', function() {
  console.log('DB OPEN');
});

var constructions = [
  {
    name: 'Развитие Московского авиационного узла. Строительство комплекса новой взлетно-посадочной полосы (ВПП-3) Международного аэропорта Шереметьево, Московская область',
    address: ''
  },
  {
    name: 'Строительство новой взлетно-посадочной полосы (ВПП-1), Московская область',
    address: ''
  },
  {
    name: 'Строительство жилого дома, Московская область',
    address: ''
  }
];
var contractors = [
  {
    type: 'entity',
    name: 'ФГУП "Администрация гражданских аэропортов (аэродромов)"',
    zip:  '',
    address: '',
    phones: [],
    entity: {
      ogrn: '1027714007089',
      inn: '7714276906'
    },
    individual: null,
    certificates: []
  },
  {
    type: 'entity',
    name: 'ООО «Трансстроймеханизация»',
    zip:  '',
    address: '',
    phones: [],
    entity: {
      ogrn: '1057747413767',
      inn: '7715568411'
    },
    individual: null,
    certificates: []
  },
  {
    type: 'entity',
    name: 'ФГУП ГПИ и НИИ ГА «Аэропроект»',
    zip:  '',
    address: '',
    phones: [],
    entity: {
      ogrn: '1027700559512',
      inn: '7712037050'
    },
    individual: null,
    certificates: []
  }
];
var people = [
  {
    _contractor: '57a9e80647531e2015092763',
    position:    'Директор',
    name:        'Иавнов А.И.',
    certificates: [{
      name: 'Доверенность',
      number: '№123',
      date: '',
      extra: ''
    }]
  },
  {
    _contractor: '57a9e80647531e2015092763',
    position:    'Директор',
    name:        'Петров Д.Ф.',
    certificates: [{
      name: 'Доверенность',
      number: '№123',
      date: '',
      extra: ''
    }]
  },
  {
    _contractor: '57a9e80647531e2015092763',
    position:    'Зам. диретора',
    name:        'Антипова А.В.',
    certificates: [{
      name: 'Доверенность',
      number: '№123',
      date: '',
      extra: ''
    }]
  }
];
var participants = [
  {
    contractor: '57a9e80647531e2015092763',
    person:     '57a9e80647531e2015092763'
  },
  {
    contractor: '57a9e80647531e2015092763',
    person:     '57a9e80647531e2015092763'
  },
  {
    contractor: '57a9e80647531e2015092763',
    person:     '57a9e80647531e2015092763'
  }
];

async.series([
  function(cb) { Construction.insertMany(constructions, cb); },
  function(cb) { Contractor.insertMany(contractors, cb);},
  function(cb) { Person.insertMany(people, cb);},
  function(cb) { Participants.insertMany(participants, cb);}
], function(err, result) {
  db.close();
});




