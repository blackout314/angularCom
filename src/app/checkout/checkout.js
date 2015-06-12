(function (document, window) {
    'use strict';

    /*global angular*/
    angular.module('checkout', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/checkout', {
                templateUrl: 'app/checkout/checkout.html',
                controller: 'CheckoutCtrl'
            });
        }])

        .controller('CheckoutCtrl', ['$scope', function ($scope) {
        }]);

}(document, window));
