import {Meteor} from 'meteor/meteor';
// import {Controller} from "../entities";
import { Controller } from 'angular-ecmascript/module-helpers';

export default class SettingsCtrl extends Controller {
    constructor() {
        super(...arguments);

        this.helpers({

        });
    }
}

SettingsCtrl.$inject = ['$scope', '$state'];
