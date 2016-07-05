import {Meteor} from 'meteor/meteor';
import { Controller } from 'angular-ecmascript/module-helpers';


export default class TabsCtrl extends Controller {
    constructor() {
        super(...arguments);

    }
}

TabsCtrl.$inject = ['$scope', '$state'];
