import {Meteor} from 'meteor/meteor';


myapp.controller('FuncCtrl', ['$scope', '$rootScope', '$state', '$ionicActionSheet', '$ionicPopup', '$ionicPopover', '$ionicSideMenuDelegate', '$cordovaToast', '$cordovaNetwork', '$cordovaDevice','ionicDatePicker',
    function ($scope, $rootScope, $state, $ionicActionSheet, $ionicPopup, $ionicPopover, $ionicSideMenuDelegate, $cordovaToast, $cordovaNetwork, $cordovaDevice, ionicDatePicker) {


        $scope.showActionSheet = showActionSheet;
        $scope.showPopup = showPopup;
        $scope.showConfirm = showConfirm;
        $scope.showAlert = showAlert;
        $scope.toggleRight = toggleRight;
        $scope.showDeviceInfo = showDeviceInfo;
        $scope.devices = {};
        $scope.f7url = location.origin+"/f7/framework7.ios.css";

        $scope.demo = 'ios';
        $scope.setPlatform = function (p) {
            document.body.classList.remove('platform-ios');
            document.body.classList.remove('platform-android');
            document.body.classList.add('platform-' + p);
            $scope.demo = p;
        }
        $scope.onSlideMove = function(data){
            $cordovaToast.showLongCenter("You have selected " + data.index + " tab");
        };
        $scope.items =  $scope.$meteorCollection(function () {
            return Products.find({});
        }, false);
        $scope.photoBrowser = photoBrowser;

        function photoBrowser(index){
            photoBrowserStandalone(index, $scope.items)
        }
        var navbarTemplate =
            '<div class="navbar">' +
            '<div class="navbar-inner">' +
            '<div class="left sliding">' +
            '<a class="link close-popup photo-browser-close-link {{#unless backLinkText}}icon-only{{/unless}} {{js "this.type === \'page\' ? \'back\' : \'\'"}}">' +
            '<i class="icon icon-back {{iconsColorClass}}"></i>' +
            '{{#if backLinkText}}<span>{{backLinkText}}</span>{{/if}}' +
            '</a>' +
            '</div>' +
            '<div class="center sliding">' +
            '<span class="photo-browser-current"></span> ' +
            '<span class="photo-browser-of">{{ofText}}</span> ' +
            '<span class="photo-browser-total"></span>' +
            '</div>' +
            '<div class="right"></div>' +
            '</div>' +
            '</div>';
        function photoBrowserStandalone(index, images){
            var myApp = new Framework7({
                init: false, //IMPORTANT - just do it, will write about why it needs to false later
            });
            var myPhotoBrowserStandalone = myApp.photoBrowser({
                navbarTemplate :navbarTemplate,
                photos : images,
                initialSlide: index,
                onClose: function(){
                    myApp = undefined;
                }
            });
            myPhotoBrowserStandalone.open();
        }

    


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
        $scope.openDatePickerOne = function (val) {
            var ipObj1 = {
                callback: function (val) {  //Mandatory
                    console.log('Return value from the datepicker popup is : ' + val, new Date(val));
                    $scope.selectedDate1 = new Date(val);
                },
                disabledDates: [
                    new Date(2016, 2, 16),
                    new Date(2015, 3, 16),
                    new Date(2015, 4, 16),
                    new Date(2015, 5, 16),
                    new Date('Wednesday, August 12, 2015'),
                    new Date("08-16-2016"),
                    new Date(1439676000000)
                ],
                from: new Date(2012, 1, 1),
                to: new Date(2016, 10, 30),
                inputDate: new Date(),
                mondayFirst: true,
                disableWeekdays: [0],
                closeOnSelect: false,
                templateType: 'popup'
            };
            ionicDatePicker.openDatePicker(ipObj1);
        };

        $scope.openDatePickerTwo = function (val) {
            var ipObj1 = {
                callback: function (val) {  //Mandatory
                    console.log('Return value from the datepicker modal is : ' + val, new Date(val));
                    $scope.selectedDate2 = new Date(val);
                },
                disabledDates: [
                    new Date(1437719836326),
                    new Date(2016, 1, 25),
                    new Date(2015, 7, 10),
                    new Date('Wednesday, August 12, 2015'),
                    new Date("08-14-2015"),
                    new Date(1439676000000),
                    new Date(1456511400000)
                ],
                from: new Date(2012, 8, 2),
                to: new Date(2016, 8, 25),
                inputDate: new Date(),
                mondayFirst: true,
                showTodayButton: false,
                closeOnSelect: false,
                templateType: 'modal'
            };
            ionicDatePicker.openDatePicker(ipObj1);
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

