// Libs
import { Meteor } from 'meteor/meteor';

import angular from 'angular';
import 'angular-meteor';
import 'angular-ui-router';
import {RoutesConfig, RoutesRunner} from '../routes';

// Modules
import Definer from '../definer';
import TabsCtrl from '../../components/tabs/tabs.controller';
import HomeCtrl from '../../components/home/home.controller';
import DetailCtrl from '../../components/detail/detail.controller';
import ListCtrl from "../../components/list/list.controller";
import SettingsCtrl from "../../components/settings/settings.controller";
import MyCtrl from "../../components/my/my.controller";



// App
const App = angular.module('App', [
    'angular-meteor',
    'angular-meteor.auth',
    'ionic'
]);

App.directive('hideTabs', function($rootScope) {
    return {
        restrict: 'A',
        link: function(scope, element, attributes) {
            scope.$on('$ionicView.beforeEnter', function() {
                scope.$watch(attributes.hideTabs, function(value){
                    $rootScope.hideTabs = value;
                });
            });

            scope.$on('$ionicView.beforeLeave', function() {
                $rootScope.hideTabs = false;
            });
        }
    };
});

new Definer(App)
    .define(TabsCtrl)
    .define(HomeCtrl)
    .define(DetailCtrl)
    .define(ListCtrl)
    .define(SettingsCtrl)
    .define(MyCtrl)
    .define(RoutesConfig)
    .define(RoutesRunner);

// Startup
if (Meteor.isCordova) {
    angular.element(document).on('deviceready', onReady);
} else {
    angular.element(document).ready(onReady);
}

function onReady() {
    angular.bootstrap(document, ['App']);
}
