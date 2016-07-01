import {Meteor} from 'meteor/meteor';
// import {Controller} from "../entities";
import { Controller } from 'angular-ecmascript/module-helpers';


export default class MyCtrl extends Controller {
    constructor() {
        super(...arguments);

        this.helpers({

        });
    }
}

MyCtrl.$inject = ['$scope', '$state'];
