myapp.controller('ListCtrl',['$scope','$state','$ionicModal',function ($scope, $state,$ionicModal) {


    $scope.showSearchModal = showSearchModal;

    function showSearchModal(){
        $ionicModal.fromTemplateUrl('client/templates/modals/searchModal.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
            $scope.modal.show();
        });
    }
}]);

// import {Meteor} from 'meteor/meteor';
// import { Controller } from 'angular-ecmascript/module-helpers';
//
//
// export default class ListCtrl extends Controller {
//     constructor() {
//         super(...arguments);
//
//         this.helpers({
//
//         });
//     }
// }
//
// ListCtrl.$inject = ['$scope', '$state'];
