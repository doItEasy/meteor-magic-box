import {Meteor} from 'meteor/meteor';

myapp.controller('MyCtrl',['$scope','$state','$ionicModal',function ($scope, $state,$ionicModal) {

    $scope.showMaphModal = showMaphModal;
    $scope.doRefresh =doRefresh;

    

    $scope.items =  $scope.$meteorCollection(function () {
        return Products.find({});
    }, false);
    
    function doRefresh() {

        console.log('Refreshing!');
        var newItem = {};
        newItem.name="美女";
        newItem.tagline="美女图片欣赏美女图片欣赏美女图片欣赏美女图片欣赏";
        newItem.url="http://d.hiphotos.baidu.com/image/pic/item/0ff41bd5ad6eddc492d491153ddbb6fd52663328.jpg";

        //simulate async response
        $scope.items.push(newItem);

        //Stop the ion-refresher from spinning
        $scope.$broadcast('scroll.refreshComplete');

    };


    function showMaphModal(){
        $ionicModal.fromTemplateUrl('client/templates/modals/mapModal.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
            $scope.modal.show();
            // 百度地图API功能
            var map = new BMap.Map("allmap");
            var point = new BMap.Point(116.331398,39.897445);
            map.centerAndZoom(point,16);

            var geolocation = new BMap.Geolocation();
            geolocation.getCurrentPosition(function(r){
                if(this.getStatus() == BMAP_STATUS_SUCCESS){
                    var mk = new BMap.Marker(r.point);
                    map.addOverlay(mk);
                    map.panTo(r.point);
                    console.log('您的位置：'+r.point.lng+','+r.point.lat);
                }
                else {
                    console.log('failed'+this.getStatus());
                }
            },{enableHighAccuracy: true})
            //关于状态码
            //BMAP_STATUS_SUCCESS	检索成功。对应数值“0”。
            //BMAP_STATUS_CITY_LIST	城市列表。对应数值“1”。
            //BMAP_STATUS_UNKNOWN_LOCATION	位置结果未知。对应数值“2”。
            //BMAP_STATUS_UNKNOWN_ROUTE	导航结果未知。对应数值“3”。
            //BMAP_STATUS_INVALID_KEY	非法密钥。对应数值“4”。
            //BMAP_STATUS_INVALID_REQUEST	非法请求。对应数值“5”。
            //BMAP_STATUS_PERMISSION_DENIED	没有权限。对应数值“6”。(自 1.1 新增)
            //BMAP_STATUS_SERVICE_UNAVAILABLE	服务不可用。对应数值“7”。(自 1.1 新增)
            //BMAP_STATUS_TIMEOUT	超时。对应数值“8”。(自 1.1 新增)
        });
    }


}]);

// import {Meteor} from 'meteor/meteor';
// import { Controller } from 'angular-ecmascript/module-helpers';
//
//
// export default class MyCtrl extends Controller {
//     constructor() {
//         super(...arguments);
//
//         this.helpers({
//
//         });
//
//         this.$scope.items = ['Item 1', 'Item 2', 'Item 3'];
//         this.$scope.doRefresh = function() {
//
//             console.log('Refreshing!');
//
//             //simulate async response
//             this.items.push('New Item ' + Math.floor(Math.random() * 1000) + 4);
//
//             //Stop the ion-refresher from spinning
//             this.$broadcast('scroll.refreshComplete');
//
//         };
//     }
//     //
//     // doRefresh(){
//     //     console.log('Refreshing!');
//     //
//     //
//     //     //simulate async response
//     //     this.$scope.items.push('New Item ' + Math.floor(Math.random() * 1000) + 4);
//     //
//     //     //Stop the ion-refresher from spinning
//     //     this.$scope.$broadcast('scroll.refreshComplete');
//     //
//     //
//     //
//     //
//     // }
//
//
//
//
//
// }
//
// MyCtrl.$inject = ['$scope', '$state','$timeout'];


