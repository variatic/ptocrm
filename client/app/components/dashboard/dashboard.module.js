import angular from 'angular';
import uiRouter from 'angular-ui-router';

import DashboardComponent from './dashboard.component';

let DashboardModule = angular
  .module('dashboard', [uiRouter])
  .config(config)
  .component('dashboard', DashboardComponent)
  .name;

/* @ngInject */
function config($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('dashboard', {
      url: '/',
      component: 'dashboard'
    });
}

export default DashboardModule;
