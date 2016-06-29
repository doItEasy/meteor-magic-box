import {Controller} from '../../scripts/entities';
import {Meteor} from 'meteor/meteor';


export default class HomeCtrl extends Controller {
    constructor() {
        super(...arguments);

        this.helpers({

        });
    }
}

HomeCtrl.$inject = ['$scope', '$state'];
