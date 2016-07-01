// import {Controller} from '../entities';
import { Controller } from 'angular-ecmascript/module-helpers';
import {Meteor} from 'meteor/meteor';


export default class DetailCtrl extends Controller {
    constructor() {
        super(...arguments);

        this.helpers({});
    }
}


DetailCtrl.$inject = ['$scope', '$state'];
