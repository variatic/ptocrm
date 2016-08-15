'use strict';

import angular from 'angular';

import App from './app/app.module';
import './assets/css/main.css';

angular.element(document).ready(function () {
  angular.bootstrap(document, [App], { strictDi: true });
});
