import {_} from 'meteor/underscore';
import {Meteor} from 'meteor/meteor';
import {Config, Runner} from 'angular-ecmascript/module-helpers';

class RoutesConfig extends Config {
    constructor() {
        super(...arguments);

        this.isAuthorized = ['$auth', this.isAuthorized.bind(this)];
    }

    configure() {



            this.$stateProvider
            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'client/templates/tabs/tabs.html',
                controller: 'TabsCtrl as tabs'
            })
            .state('app.home', {
                url: '/home',
                views: {
                    'tab1': {
                        templateUrl: 'client/templates/home/home.html',
                        controller: 'HomeCtrl as home'
                    }
                }
            })
            .state('app.list', {
                url: '/list',
                views: {
                    'tab2': {
                        templateUrl: 'client/templates/list/list.html',
                        controller: 'ListCtrl as list'
                    }
                }
            })
            .state('app.my', {
                url: '/my',
                views: {
                    'tab3': {
                        templateUrl: 'client/templates/my/my.html',
                        controller: 'MyCtrl as my'
                    }
                }
            })
            .state('app.settings', {
                url: '/settings',
                views: {
                    'tab4': {
                        templateUrl: 'client/templates/settings/settings.html',
                        controller: 'SettingsCtrl as settings'
                    }
                }
            })
            .state('app.actionsheet', {
                url: '/actionsheet',
                views: {
                    'tab2': {
                        templateUrl: 'client/templates/list/function/actionsheet.html'
                    }
                }
            })
            .state('app.popup', {
                url: '/popup',
                views: {
                    'tab2': {
                        templateUrl: 'client/templates/list/function/popup.html'
                    }
                }
            })
            .state('app.spinner', {
                url: '/spinner',
                views: {
                    'tab2': {
                        templateUrl: 'client/templates/list/function/spinner.html'
                    }
                }
            })
            .state('app.bar', {
                url: '/bar',
                views: {
                    'tab2': {
                        templateUrl: 'client/templates/list/function/bar.html'
                    }
                }
            })
            .state('app.toggle', {
                url: '/toggle',
                views: {
                    'tab2': {
                        templateUrl: 'client/templates/list/function/toggle.html'
                    }
                }
            })
            .state('app.checkbox', {
                url: '/checkbox',
                views: {
                    'tab2': {
                        templateUrl: 'client/templates/list/function/checkbox.html'
                    }
                }
            })
            .state('app.radio', {
                url: '/radio',
                views: {
                    'tab2': {
                        templateUrl: 'client/templates/list/function/radio.html'
                    }
                }
            })
            .state('app.range', {
                url: '/range',
                views: {
                    'tab2': {
                        templateUrl: 'client/templates/list/function/range.html'
                    }
                }
            })
            .state('app.select', {
                url: '/select',
                views: {
                    'tab2': {
                        templateUrl: 'client/templates/list/function/select.html'
                    }
                }
            })
            .state('app.forms', {
                url: '/forms',
                views: {
                    'tab2': {
                        templateUrl: 'client/templates/list/function/forms.html'
                    }
                }
            })
            .state('app.slide', {
                url: '/slide',
                views: {
                    'tab2': {
                        templateUrl: 'client/templates/list/function/slide.html'
                    }
                }
            })
            .state('app.listdemo', {
                url: '/listdemo',
                views: {
                    'tab2': {
                        templateUrl: 'client/templates/list/function/listdemo.html'
                    }
                }
            });

        this.$urlRouterProvider.otherwise('app/home');
    }

    isAuthorized($auth) {
        return $auth.awaitUser();
    }
}

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

class RoutesRunner extends Runner {
    run() {
        this.$rootScope.$on('$stateChangeError', (...args) => {
            const err = _.last(args);

            if (err === 'AUTH_REQUIRED') {
                this.$state.go('login');
            }
        });
    }
}

RoutesRunner.$inject = ['$rootScope', '$state'];

export default [RoutesConfig, RoutesRunner];