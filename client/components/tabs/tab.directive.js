import {Directive} from '../../scripts/entities';



export default class tabDirective extends Directive{
    constructor() {
        super(...arguments);
        this.restrict = 'A';
        this.link = function(scope, element,attributes) {
            scope.$on('$ionicView.beforeEnter', function() {
                scope.$watch(attributes.hideTabs, function(value){
                    $rootScope.hideTabs = value;
                });
            });

            scope.$on('$ionicView.beforeLeave', function() {
                $rootScope.hideTabs = false;
            });
        }
    }



}



tabDirective.$name = 'hideTabs';
tabDirective.$inject = ['$rootScope'];