// import {Controller} from '../entities';
import { Controller } from 'angular-ecmascript/module-helpers';
import {Meteor} from 'meteor/meteor';


export default class HomeCtrl extends Controller {
    constructor() {
        super(...arguments);

        this.helpers({

        });
    }
    showSearchModal(){
        this.Search.showModal();
    }

}

HomeCtrl.$inject = ['$scope','$state','Search'];


