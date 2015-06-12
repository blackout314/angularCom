(function (document, window) {
    'use strict';

    /*global angular*/
    angular.module('cart', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/cart', {
                templateUrl: 'app/cart/cart.html',
                controller: 'CartCtrl'
            });
        }])

        .controller('CartCtrl', [function () {

        }]);
}(document, window));
