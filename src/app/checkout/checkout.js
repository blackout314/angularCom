(function (document, window) {
    'use strict';

    angular.module('checkout', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/checkout', {
        templateUrl: 'app/checkout/checkout.html',
        controller: 'CheckoutCtrl'
      });
    }])

    .controller('CheckoutCtrl', ['$scope',function($scope) {

    }]);
})(document, window);
