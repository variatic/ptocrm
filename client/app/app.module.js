import angular  from 'angular';
import uiRouter from 'angular-ui-router';

import Common       from './common/common.module';
import Components   from './components/components.module';
import AppComponent from './app.component';

let AppModule = angular
  .module('app', [
    uiRouter,
    Common,
    Components
  ])
  .component('app', AppComponent)
  .name;

export default AppModule;
