myapp.config(['$stateProvider','$urlRouterProvider','$ionicConfigProvider',function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
    $ionicConfigProvider.platform.ios.tabs.style('standard');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('standard');

    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('center');

    $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
    $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('android');
    // $ionicConfigProvider.views.swipeBackEnabled(false);

}]);


myapp.config(['$ionicNativeTransitionsProvider','$ionicConfigProvider',function($ionicNativeTransitionsProvider,$ionicConfigProvider){

    if(navigator.userAgent.match(/(iPad|iPhone|iOS)/gi)){//ios无需nativeTransition
        $ionicNativeTransitionsProvider.enable(false);

    }
    $ionicNativeTransitionsProvider.setDefaultOptions({
        duration: 300, // in milliseconds (ms), default 400,
        slowdownfactor: 4, // overlap views (higher number is more) or no overlap (1), default 4
        iosdelay: -1, // ms to wait for the iOS webview to update before animation kicks in, default -1
        androiddelay: -1, // same as above but for Android, default -1
        winphonedelay: -1, // same as above but for Windows Phone, default -1,
        fixedPixelsTop: 0, // the number of pixels of your fixed header, default 0 (iOS and Android)
        fixedPixelsBottom: 0, // the number of pixels of your fixed footer (f.i. a tab bar), default 0 (iOS and Android)
        triggerTransitionEvent: '$ionicView.afterEnter', // internal ionic-native-transitions option
        backInOppositeDirection: false // Takes over default back transition and state back transition to use the opposite direction transition to go back
    });
    $ionicNativeTransitionsProvider.setDefaultTransition({
        type: 'slide',
        direction: 'left'
    });
    $ionicNativeTransitionsProvider.setDefaultBackTransition({
        type: 'slide',
        direction: 'right'
    });


}]);





myapp.run(['$rootScope','$state',auth]);

function auth ($rootScope, $state) {
    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
        if (error === 'AUTH_REQUIRED') {
            $state.go('login');
        }
    });
    $rootScope.$on('ionicNativeTransitions.beforeTransition', function(){
        console.log("beforeTransition");
    });

    $rootScope.$on('ionicNativeTransitions.success', function(){
        console.log("Transition success");
    });

    $rootScope.$on('ionicNativeTransitions.error', function(){
        console.log("Transition error");
    });
}

myapp.run(['$ionicPlatform','$rootScope','$location','$ionicHistory','$cordovaToast',function run($ionicPlatform, $rootScope, $location, $ionicHistory,$cordovaToast) {
    $ionicPlatform.ready(function ($rootScope) {

    });
    //双击退出
    $ionicPlatform.registerBackButtonAction(function (e) {
        //判断处于哪个页面时双击退出
        if ($location.path() == '/app/home'|| $location.path() == '/app/list' || $location.path() == '/app/my' || $location.path() == '/app/settings') {
            if ($rootScope.backButtonPressedOnceToExit) {
                ionic.Platform.exitApp();
            } else {
                $rootScope.backButtonPressedOnceToExit = true;
                $cordovaToast.showShortBottom('再按一次退出程序');
                setTimeout(function () {
                    $rootScope.backButtonPressedOnceToExit = false;
                }, 2000);
            }
        }
        else if ($ionicHistory.backView()) {
            $ionicNativeTransitions.unregisterToStateChangeStartEvent();
            $ionicHistory.goBack();
            $ionicNativeTransitions.transition('back');
        } else {
            $rootScope.backButtonPressedOnceToExit = true;
            $cordovaToast.showShortBottom('再按一次退出程序');
            setTimeout(function () {
                $rootScope.backButtonPressedOnceToExit = false;
            }, 2000);
        }
        e.preventDefault();
        return false;
    }, 101);
}]);





