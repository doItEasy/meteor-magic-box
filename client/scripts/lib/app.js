// Libs
// import 'angular-meteor-auth';    //改为meteor add angular-meteor-auth
// import 'angular-ui-router';      //改为meteor add driftyco:ionic
// import 'angular-animate';        //改为meteor add driftyco:ionic
// import 'angular-sanitize';       //改为meteor add driftyco:ionic

import 'angular-meteor';
import 'ionic-native-transitions';
import Angular from 'angular';
import Loader from 'angular-ecmascript/module-loader';
import {Meteor} from 'meteor/meteor';
// Modules
import TabsCtrl from '../controllers/tabs.controller';
import HomeCtrl from '../controllers/home.controller';
import FuncCtrl from '../controllers/func.controller';
import ListCtrl from "../controllers/list.controller";
import SettingsCtrl from "../controllers/settings.controller";
import MyCtrl from "../controllers/my.controller";
import SearchService from "../services/search.service";
import SearchCtrl from "../controllers/search.controller";
import Routes from '../routes';


// App
const App = Angular.module('meteor-magic-box', [
    'angular-meteor',
    'ionic-native-transitions',
    'angular-meteor.auth',
    'ionic'
]);
App.directive('hideTabs', function ($rootScope) {
    return {
        restrict: 'A',
        link: function (scope, element, attributes) {
            scope.$on('$ionicView.beforeEnter', function () {
                scope.$watch(attributes.hideTabs, function (value) {
                    $rootScope.hideTabs = value;
                });
            });

            scope.$on('$ionicView.beforeLeave', function () {
                $rootScope.hideTabs = false;
            });
        }
    };
});


App.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {

    $ionicConfigProvider.platform.ios.tabs.style('standard');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('standard');

    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('center');

    $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
    $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('android');
});


new Loader('meteor-magic-box')
    .load(TabsCtrl)
    .load(HomeCtrl)
    .load(FuncCtrl)
    .load(ListCtrl)
    .load(SettingsCtrl)
    .load(MyCtrl)
    .load(SearchCtrl)
    .load(SearchService)
    .load(Routes);


// Startup
if (Meteor.isCordova) {
    Angular.element(document).on('deviceready', onReady);
}
else {
    Angular.element(document).ready(onReady);
}

function onReady() {
    Angular.bootstrap(document, ['meteor-magic-box']);
}
