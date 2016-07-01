// // Libs
// import { Meteor } from 'meteor/meteor';
//
// import angular from 'angular';
// import 'angular-meteor';
// import 'angular-ui-router';
// import {RoutesConfig, RoutesRunner} from '../routes';
//
// // Modules
// import Definer from '../definer';
// import TabsCtrl from '../controllers/tabs.controller';
// import HomeCtrl from '../controllers/home.controller';
// import DetailCtrl from '../controllers/detail.controller';
// import ListCtrl from "../controllers/list.controller";
// import SettingsCtrl from "../controllers/settings.controller";
// import MyCtrl from "../controllers/my.controller";
// import SearchService from "../services/search.service";
//
//
//
// // App
// const App = angular.module('App', [
//     'angular-meteor',
//     'angular-meteor.auth',
//     'ionic'
// ]);
//
// App.directive('hideTabs', function($rootScope) {
//     return {
//         restrict: 'A',
//         link: function(scope, element, attributes) {
//             scope.$on('$ionicView.beforeEnter', function() {
//                 scope.$watch(attributes.hideTabs, function(value){
//                     $rootScope.hideTabs = value;
//                 });
//             });
//
//             scope.$on('$ionicView.beforeLeave', function() {
//                 $rootScope.hideTabs = false;
//             });
//         }
//     };
// });
//
// new Definer(App)
//     .define(TabsCtrl)
//     .define(HomeCtrl)
//     .define(DetailCtrl)
//     .define(ListCtrl)
//     .define(SettingsCtrl)
//     .define(MyCtrl)
//     .define(RoutesConfig)
//     .define(SearchService)
//     .define(RoutesRunner);
//
// // Startup
// if (Meteor.isCordova) {
//     angular.element(document).on('deviceready', onReady);
// } else {
//     angular.element(document).ready(onReady);
// }
//
// function onReady() {
//     angular.bootstrap(document, ['App']);
// }
