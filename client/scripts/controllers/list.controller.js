import {Meteor} from 'meteor/meteor';
import { Controller } from 'angular-ecmascript/module-helpers';


export default class ListCtrl extends Controller {
    constructor() {
        super(...arguments);

        this.helpers({

        });
    }
}

ListCtrl.$inject = ['$scope', '$state'];
