import {Meteor} from 'meteor/meteor';
import {Controller} from "../../scripts/entities";


export default class MyCtrl extends Controller {
    constructor() {
        super(...arguments);

        this.helpers({

        });
    }
}

MyCtrl.$inject = ['$scope', '$state'];
