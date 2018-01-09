import angular from 'angular';
import uiRouter from 'angular-ui-router';
import breadcrumbsComponent from './components/breadcrumbs/breadcrumbs.component.js';
import headerComponent from './components/header/header.component.js';
import uicommons from 'openmrs-contrib-uicommons';
import insurerEditComponent from './components/insurerEdit/insurerEdit.component';
import homeComponent from "./home.component";

let homeModule = angular.module('home', [ uiRouter, 'openmrs-contrib-uicommons'])
    .config(($stateProvider, $urlRouterProvider) => {
        "ngInject";
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('home', {
            url: '/',
            template: `<home></home>`,
        });

        $stateProvider.state('insurer', {
           url: '/add-insurer',
           template: `<insurer-edit></insurer-edit>`
        });
    })
    .config(['$qProvider', function ($qProvider) {
      $qProvider.errorOnUnhandledRejections(false);
    }])

    // To prevent adding Hash bangs(#!/) instead of simple hash(#/) in Angular >1.5

    .config(['$locationProvider', function($locationProvider) {
      $locationProvider.hashPrefix('');
    }])

    .component('breadcrumbsComponent', breadcrumbsComponent)
    .component('headerComponent', headerComponent)
    .component('insurerEdit', insurerEditComponent)
    .component('home', homeComponent);

export default homeModule;
