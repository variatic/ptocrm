import angular from 'angular';

import Dashboard from './dashboard/dashboard.module';
import Documents from './documents/documents.module';
import Document from './document/document.module';

let ComponentsModule = angular
  .module('app.components', [
    Dashboard,
    Documents,
    Document
  ])
  .name;

export default ComponentsModule;
