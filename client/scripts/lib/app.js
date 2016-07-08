// Libs
// import 'angular-meteor-auth';    //改为meteor add angular-meteor-auth
// import 'angular-ui-router';      //改为meteor add driftyco:ionic
// import 'angular-animate';        //改为meteor add driftyco:ionic
// import 'angular-sanitize';       //改为meteor add driftyco:ionic

import 'angular-meteor';
import 'ionic-native-transitions';
import Angular from 'angular';
import {Meteor} from 'meteor/meteor';


// Modules
// import TabsCtrl from '../controllers/tabs.controller';
// import HomeCtrl from '../controllers/home.controller';
// import FuncCtrl from '../controllers/func.controller';
// import ListCtrl from "../controllers/list.controller";
// import SettingsCtrl from "../controllers/settings.controller";
// import MyCtrl from "../controllers/my.controller";
// import SearchService from "../services/search.service";
// import SearchCtrl from "../controllers/search.controller";
// import Routes from '../routes';

// App
myapp = Angular.module('meteor-magic-box', [
    'angular-meteor',
    'ionic-native-transitions',
    'angular-meteor.auth',
    'ionic'
]);











// class TabsCtrl{}
// new Loader('meteor-magic-box')
//     .load(TabsCtrl)
//     .load(HomeCtrl)
//     .load(FuncCtrl)
//     .load(ListCtrl)
//     .load(SettingsCtrl)
//     .load(MyCtrl)
//     .load(SearchCtrl)
//     .load(SearchService)
//     .load(Routes);


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
