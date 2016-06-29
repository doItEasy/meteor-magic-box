import {Controller} from '../../scripts/entities';
import {Meteor} from 'meteor/meteor';


export default class DetailCtrl extends Controller {
    constructor() {
        super(...arguments);

        this.helpers({});
    }
}


DetailCtrl.$inject = ['$scope', '$state'];
