import angular from 'angular';
import AppCtrl from './app.controller.js';
import AppDirective from './app.directive.js';

import './../assets/main.less';

const app = angular.module('app', [])
  .controller("AppCtrl", AppCtrl)
  .directive("app", AppDirective);

export default app;
