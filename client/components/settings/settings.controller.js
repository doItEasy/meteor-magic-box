import {Meteor} from 'meteor/meteor';
import {Controller} from "../../scripts/entities";


export default class SettingsCtrl extends Controller {
    constructor() {
        super(...arguments);

        this.helpers({

        });
    }
}

SettingsCtrl.$inject = ['$scope', '$state'];
