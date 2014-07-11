'use strict';

// Declare app level module which depends on filters, and services

angular.module('hhc', ['hhc.filters', 'hhc.services', 'hhc.directives']).
    config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'partials/index',
                controller: 'index'
            }).
            when('/hero', {
                templateUrl: 'partials/hero-list',
                controller: 'hero'
            }).
            otherwise({
                redirectTo: '/'
            });
        $locationProvider.html5Mode(true);
    }]);
