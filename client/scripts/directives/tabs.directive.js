import { Directive } from 'angular-ecmascript/module-helpers';



export default class tabDirective extends Directive{
    constructor() {
        super(...arguments);
        this.restrict = 'A';
    }

}





tabDirective.$name = 'hideTabs';
tabDirective.$inject = ['$rootScope'];