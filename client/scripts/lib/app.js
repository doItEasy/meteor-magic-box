// Libs
// import 'angular-meteor-auth';    //改为meteor add angular-meteor-auth
// import 'angular-ui-router';      //改为meteor add driftyco:ionic
// import 'angular-animate';        //改为meteor add driftyco:ionic
// import 'angular-sanitize';       //改为meteor add driftyco:ionic

import 'angular-meteor';
import 'ionic-native-transitions';
import Angular from 'angular';
import {Meteor} from 'meteor/meteor';

//app
myapp = Angular.module('meteor-magic-box', [
    'angular-meteor',
    'ionic-native-transitions',
    'angular-meteor.auth',
    'ionic'
]);



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
