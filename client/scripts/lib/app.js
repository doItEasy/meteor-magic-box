// Libs
// import 'angular-meteor-auth';    #改为meteor add angular-meteor-auth
// import 'angular-ui-router';      #改为driftyco:ionic
// import 'angular-animate';        #改为driftyco:ionic
// import 'angular-sanitize';       #改为driftyco:ionic


import 'angular-meteor';
import Angular from 'angular';
import Loader from 'angular-ecmascript/module-loader';
import {Meteor} from 'meteor/meteor';

// Modules
import TabsCtrl from '../controllers/tabs.controller';
import HomeCtrl from '../controllers/home.controller';
import DetailCtrl from '../controllers/detail.controller';
import ListCtrl from "../controllers/list.controller";
import SettingsCtrl from "../controllers/settings.controller";
import MyCtrl from "../controllers/my.controller";
import SearchService from "../services/search.service";
import SearchCtrl from "../controllers/search.controller";
import Routes from '../routes';


// App
const AppName = 'meteor-magic-box';
const App = Angular.module(AppName, [
    'angular-meteor',
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

new Loader(AppName)
    .load(TabsCtrl)
    .load(HomeCtrl)
    .load(DetailCtrl)
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
    Angular.bootstrap(document, [AppName]);
}
