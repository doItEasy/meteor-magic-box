myapp.controller('HomeCtrl',['$scope','$ionicModal','$ionicSideMenuDelegate',function ($scope,$ionicModal,$ionicSideMenuDelegate) {

    $scope.showNewProductModal = showNewProductModal;
    $scope.toggleLeft = toggleLeft;
    $scope.createProduct = createProduct;
    $scope.items =  $scope.$meteorCollection(function () {
        return Products.find({});
    }, false);



    $('.home_banner').slick({
        dots: true,
        infinite: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'linear'
    });
    
    $scope.$on('$destroy', function () {
        $scope.modal.remove();
    });


    function createProduct(obj) {
        console.log(obj);
        $scope.items.push(obj);
        $scope.modal.hide();
    };


    function showNewProductModal(){
        $ionicModal.fromTemplateUrl('client/templates/modals/newProduct.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
            $scope.modal.show();
        });
    }

    function toggleLeft() {
        $ionicSideMenuDelegate.toggleLeft();
    };


}]);


// import { Controller } from 'angular-ecmascript/module-helpers';
// import {Meteor} from 'meteor/meteor';
//
//
// export default class HomeCtrl extends Controller {
//     constructor() {
//         super(...arguments);
//
//         this.helpers({
//
//         });
//     }
//     showSearchModal(){
//         this.Search.showModal();
//     }
//
// }
//
// HomeCtrl.$inject = ['$scope','$state','Search'];




