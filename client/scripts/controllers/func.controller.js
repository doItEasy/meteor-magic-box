import { Controller } from 'angular-ecmascript/module-helpers';
import {Meteor} from 'meteor/meteor';


export default class FuncCtrl extends Controller {
    constructor() {
        super(...arguments);

        this.helpers({});


        this.$scope.demo = 'ios';
        this.$scope.setPlatform = function(p) {
            document.body.classList.remove('platform-ios');
            document.body.classList.remove('platform-android');
            document.body.classList.add('platform-' + p);
            this.demo = p;
        }

    }

    showActionSheet(){

        var hideSheet = this.$ionicActionSheet.show({
            buttons: [
                { text: '<b>Share</b> This' },
                { text: 'Move' }
            ],
            destructiveText: 'Delete',
            titleText: 'Modify your album',
            cancelText: 'Cancel',
            cancel: function() {
                // add cancel code..
            },
            buttonClicked: function(index) {
                return true;
            }
        });

    }

    showPopup(){
        this.$ionicPopup.show({
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
    showConfirm() {
        var confirmPopup =this.$ionicPopup.confirm({
            title: 'Consume Ice Cream',
            template: 'Are you sure you want to eat this ice cream?'
        });

        confirmPopup.then(function(res) {
            if(res) {
                console.log('You are sure');
            } else {
                console.log('You are not sure');
            }
        });
    };

    // An alert dialog
    showAlert() {
        var alertPopup = this.$ionicPopup.alert({
            title: 'Don\'t eat that!',
            template: 'It might taste good'
        });

        alertPopup.then(function(res) {
            console.log('Thank you for not eating my delicious ice cream cone');
        });
    };

}

FuncCtrl.$inject = ['$scope','$ionicActionSheet', '$state','$ionicPopup','$ionicPopover'];
