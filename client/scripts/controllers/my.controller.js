import {Meteor} from 'meteor/meteor';
import { Controller } from 'angular-ecmascript/module-helpers';


export default class MyCtrl extends Controller {
    constructor() {
        super(...arguments);

        this.helpers({

        });

        this.$scope.items = ['Item 1', 'Item 2', 'Item 3'];
        this.$scope.doRefresh = function() {

            console.log('Refreshing!');

            //simulate async response
            this.items.push('New Item ' + Math.floor(Math.random() * 1000) + 4);

            //Stop the ion-refresher from spinning
            this.$broadcast('scroll.refreshComplete');

        };
    }
    //
    // doRefresh(){
    //     console.log('Refreshing!');
    //
    //
    //     //simulate async response
    //     this.$scope.items.push('New Item ' + Math.floor(Math.random() * 1000) + 4);
    //
    //     //Stop the ion-refresher from spinning
    //     this.$scope.$broadcast('scroll.refreshComplete');
    //
    //
    //
    //
    // }





}

MyCtrl.$inject = ['$scope', '$state','$timeout'];
