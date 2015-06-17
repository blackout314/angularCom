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

        .controller('CartCtrl', ['$scope', 'Cart', function ($scope, Cart) {
            $scope.template = 'app/cart/cart.html'; // TODO creare vista intera e rinominare la partial

            // retrieve user info (if present)
            $scope.user     = 'UserExample';

            // actions
            $scope.increaseQuantity = function (id) {
            };
            $scope.decreaseQuantity = function (id) {
            };
            $scope.deleteItem = function (id) {
            };
            $scope.moveToWishlist = function (id) {
            };
        }]);
}(document, window));
