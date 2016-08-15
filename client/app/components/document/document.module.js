import angular from 'angular';
import uiRouter from 'angular-ui-router';

import DocumentComponent from './document.component';
import DocumentModel from './document.model';

let DocumentModule = angular
  .module('document', [uiRouter])
  .component('document', DocumentComponent)
  .service('document', DocumentModel)
  .config(config)
  .name;

/* @ngInject */
function config($stateProvider, DocumentModel) {
  $stateProvider
    .state('document', {
      url: '/document/:id',
      component: 'document'
    });
}

export default DocumentModule;
