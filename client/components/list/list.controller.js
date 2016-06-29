import {Meteor} from 'meteor/meteor';
import {Controller} from "../../scripts/entities";


export default class ListCtrl extends Controller {
    constructor() {
        super(...arguments);

        this.helpers({

        });
    }
}

ListCtrl.$inject = ['$scope', '$state'];
