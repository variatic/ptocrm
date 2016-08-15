import angular from 'angular';

import HeaderComponent from './ui-header.component';

let HeaderModule = angular
  .module('ui-header', [])
  .component('ui-header', HeaderComponent)
  .name;

export default HeaderModule;
