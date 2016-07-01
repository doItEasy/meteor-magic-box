import {Meteor} from 'meteor/meteor';
import { Controller } from 'angular-ecmascript/module-helpers';
// import {Controller} from "../entities";


export default class ListCtrl extends Controller {
    constructor() {
        super(...arguments);

        this.helpers({

        });
    }
}

ListCtrl.$inject = ['$scope', '$state'];
