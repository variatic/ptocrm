import angular from 'angular';

import LogoComponent from './logo.component';

let LogoModule = angular
  .module('logo', [])
  .component('logo', LogoComponent)
  .name;

export default LogoModule;
