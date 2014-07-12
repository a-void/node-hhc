'use strict';

/**
 * Controllers
 */
function index($scope, $http) {
    var user = true;
    $scope.user = user ? 'someUser' : null;
    $scope.link = '/hero';
    $scope.message = 'Hero List';
}

function footer($scope, $http, $location) {
    var user = true;
    $scope.login = user ? 'ACCOUNT' : 'LOGIN';
}

function hero($scope, $http, $routeParams) {

}
