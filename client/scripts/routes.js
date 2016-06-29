import {Config, Runner} from './entities';

export class RoutesConfig extends Config {
    constructor() {
        super(...arguments);

        this.isAuthorized = ['$auth', this.isAuthorized.bind(this)];
    }

    configure() {
        this.$stateProvider
            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'client/components/tabs/tabs.html',
                controller: 'TabsCtrl as tabs'
            })
            .state('app.home', {
                url: '/home',
                views: {
                    'tab1': {
                        templateUrl: 'client/components/home/home.html',
                        controller: 'HomeCtrl as home'
                    }
                }
            })
            .state('app.list', {
                url: '/list',
                views: {
                    'tab2': {
                        templateUrl: 'client/components/list/list.html',
                        controller: 'ListCtrl as list'
                    }
                }
            })
            .state('app.my', {
                url: '/my',
                views: {
                    'tab3': {
                        templateUrl: 'client/components/my/my.html',
                        controller: 'MyCtrl as my'
                    }
                }
            })
            .state('app.settings', {
                url: '/settings',
                views: {
                    'tab4': {
                        templateUrl: 'client/components/settings/settings.html',
                        controller: 'SettingsCtrl as settings'
                    }
                }
            })
            .state('app.detail', {
                url: '/detail',
                views: {
                    'tab2': {
                        templateUrl: 'client/components/detail/detail.html',
                        controller: 'DetailCtrl as detail'
                    }
                }
            });

        this.$urlRouterProvider.otherwise('/app/home');
    }


    isAuthorized($auth) {
        return $auth.awaitUser();
    }
}

export class RoutesRunner extends Runner {
    run() {
        this.$rootScope.$on('$stateChangeError', (...args) => {
            const err = _.last(args);

            if (err === 'AUTH_REQUIRED') {
                this.$state.go('app.content');
            }
        });
    }
}

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
RoutesRunner.$inject = ['$rootScope', '$state'];
