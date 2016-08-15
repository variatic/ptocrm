import angular from 'angular';

import Header from './ui-header/ui-header.module';
import Logo from './logo/logo.module';
import Navbar from './navbar/navbar';

let commonModule = angular
  .module('app.common', [
    Header,
    Navbar,
    Logo
  ])
  .name;

export default commonModule;
