import {Meteor} from 'meteor/meteor';
import {Controller} from "../../scripts/entities";

export default class TabsCtrl extends Controller {
    constructor() {
        super(...arguments);

    }
}

TabsCtrl.$inject = ['$scope', '$state'];
