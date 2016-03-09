var countryApp = angular.module('myApp', ['ngRoute','home','friend']);

countryApp.config(function($routeProvider) {
    $routeProvider.

    when('/friendsList', {
        templateUrl: 'partials/friendsList.html',
        controller: 'FriendsController'
    });

});