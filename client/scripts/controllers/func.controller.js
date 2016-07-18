myapp.controller('FuncCtrl', ['$scope', '$rootScope', '$state', '$ionicActionSheet', '$ionicPopup', '$ionicPopover', '$ionicSideMenuDelegate', '$cordovaToast', '$cordovaNetwork', '$cordovaDevice',
    function ($scope, $rootScope, $state, $ionicActionSheet, $ionicPopup, $ionicPopover, $ionicSideMenuDelegate, $cordovaToast, $cordovaNetwork, $cordovaDevice) {


        $scope.showActionSheet = showActionSheet;
        $scope.showPopup = showPopup;
        $scope.showConfirm = showConfirm;
        $scope.showAlert = showAlert;
        $scope.toggleRight = toggleRight;
        $scope.showDeviceInfo = showDeviceInfo;
        $scope.devices = {};


        $scope.demo = 'ios';
        $scope.setPlatform = function (p) {
            document.body.classList.remove('platform-ios');
            document.body.classList.remove('platform-android');
            document.body.classList.add('platform-' + p);
            $scope.demo = p;
        }
        // $ionicPopover.fromTemplateUrl('templates/popover.html', {
        //     scope: $scope,
        // }).then(function (popover) {
        //     $scope.popover = popover;
        // });

        if (Meteor.isCordova) {



            // listen for Online event
            $rootScope.$on('$cordovaNetwork:online', function (event, networkState) {
                $cordovaToast.showShortBottom('网络正常');

            })

            // listen for Offline event
            $rootScope.$on('$cordovaNetwork:offline', function (event, networkState) {
                $cordovaToast.showShortBottom('网络异常');

            })
        }


        function showDeviceInfo() {
            if (Meteor.isCordova) {
                var isOnline = $cordovaNetwork.isOnline();
                var isOffline = $cordovaNetwork.isOffline();
                $scope.devices.device = "device:" + JSON.stringify($cordovaDevice.getDevice());
                $scope.devices.netType = "网络类型:" + $cordovaNetwork.getNetwork();
                $scope.devices.isOnline = "网络是否连接:" + $cordovaNetwork.isOnline();
                $scope.devices.cordova = "cordova:" + $cordovaDevice.getCordova();
                $scope.devices.model = "model:" + $cordovaDevice.getModel();
                $scope.devices.platform = "platform:" + $cordovaDevice.getPlatform();
                $scope.devices.uuid = "uuid:" + $cordovaDevice.getUUID();
                $scope.devices.version = "version:" + $cordovaDevice.getVersion();
            } else {
                $ionicPopup.alert({
                    template: '此功能只在app中提供'
                });
            }
        }


        function showActionSheet() {

            var hideSheet = $ionicActionSheet.show({
                buttons: [
                    {text: '<b>Share</b> This'},
                    {text: 'Move'}
                ],
                destructiveText: 'Delete',
                titleText: 'Modify your album',
                cancelText: 'Cancel',
                cancel: function () {
                    // add cancel code..
                },
                buttonClicked: function (index) {
                    return true;
                }
            });

        }

        function showPopup() {
            $ionicPopup.show({
                template: '<input type="password" ng-model="data.wifi">',
                title: 'Enter Wi-Fi Password',
                subTitle: 'Please use normal things',
                scope: this.$scope,
                buttons: [
                    {text: 'Cancel'},
                    {
                        text: '<b>Save</b>',
                        type: 'button-positive',
                        onTap: function (e) {
                            if (!this.$scope.data.wifi) {
                                //don't allow the user to close unless he enters wifi password
                                e.preventDefault();
                            } else {
                                return this.$scope.data.wifi;
                            }
                        }
                    }
                ]
            });
        }


        // A confirm dialog
        function showConfirm() {
            var confirmPopup = $ionicPopup.confirm({
                title: 'Consume Ice Cream',
                template: 'Are you sure you want to eat this ice cream?'
            });

            confirmPopup.then(function (res) {
                if (res) {
                    console.log('You are sure');
                } else {
                    console.log('You are not sure');
                }
            });
        };

        // An alert dialog
        function showAlert() {
            var alertPopup = $ionicPopup.alert({
                title: 'Don\'t eat that!',
                template: 'It might taste good'
            });

            alertPopup.then(function (res) {
                console.log('Thank you for not eating my delicious ice cream cone');
            });
        };

        function toggleRight() {
            $ionicSideMenuDelegate.toggleRight();
        };

    }]);


// import { Controller } from 'angular-ecmascript/module-helpers';
// import {Meteor} from 'meteor/meteor';
//
//
// export default class FuncCtrl extends Controller {
//     constructor() {
//         super(...arguments);
//
//         this.helpers({});
//
//
//         this.$scope.demo = 'ios';
//         this.$scope.setPlatform = function(p) {
//             document.body.classList.remove('platform-ios');
//             document.body.classList.remove('platform-android');
//             document.body.classList.add('platform-' + p);
//             this.demo = p;
//         }
//
//     }
//
//     showActionSheet(){
//
//         var hideSheet = this.$ionicActionSheet.show({
//             buttons: [
//                 { text: '<b>Share</b> This' },
//                 { text: 'Move' }
//             ],
//             destructiveText: 'Delete',
//             titleText: 'Modify your album',
//             cancelText: 'Cancel',
//             cancel: function() {
//                 // add cancel code..
//             },
//             buttonClicked: function(index) {
//                 return true;
//             }
//         });
//
//     }
//
//     showPopup(){
//         this.$ionicPopup.show({
//             template: '<input type="password" ng-model="data.wifi">',
//             title: 'Enter Wi-Fi Password',
//             subTitle: 'Please use normal things',
//             scope: this.$scope,
//             buttons: [
//                 {text: 'Cancel'},
//                 {
//                     text: '<b>Save</b>',
//                     type: 'button-positive',
//                     onTap: function (e) {
//                         if (!this.$scope.data.wifi) {
//                             //don't allow the user to close unless he enters wifi password
//                             e.preventDefault();
//                         } else {
//                             return this.$scope.data.wifi;
//                         }
//                     }
//                 }
//             ]
//         });
//     }
//
//
//     // A confirm dialog
//     showConfirm() {
//         var confirmPopup =this.$ionicPopup.confirm({
//             title: 'Consume Ice Cream',
//             template: 'Are you sure you want to eat this ice cream?'
//         });
//
//         confirmPopup.then(function(res) {
//             if(res) {
//                 console.log('You are sure');
//             } else {
//                 console.log('You are not sure');
//             }
//         });
//     };
//
//     // An alert dialog
//     showAlert() {
//         var alertPopup = this.$ionicPopup.alert({
//             title: 'Don\'t eat that!',
//             template: 'It might taste good'
//         });
//
//         alertPopup.then(function(res) {
//             console.log('Thank you for not eating my delicious ice cream cone');
//         });
//     };
//
// }
//
// FuncCtrl.$inject = ['$scope','$ionicActionSheet', '$state','$ionicPopup','$ionicPopover'];

