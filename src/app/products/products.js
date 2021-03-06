(function (document, window) {
    'use strict';

    /*global angular*/
    angular.module('products', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.
                when('/products', {
                    templateUrl: 'app/products/products.html',
                    controller: 'ProductsCtrl'
                }).
                when('/product/:productId', {
                    templateUrl: 'app/products/product.html',
                    controller: 'ProductsCtrl'
                });
        }])

        .controller('ProductsCtrl', [
            '$scope',
            'Product',
            'Cart',
            '$routeParams',
            '$location',
            '$timeout',
            function ($scope, Product, Cart, $routeParams, $location, $timeout) {
                $scope.products = {
                    "sku1" : new Product({ "sku": "001", "name": "product1", "value": 11 }),
                    "sku2" : new Product({ "sku": "002", "name": "product2", "value": 12 })
                };

                if ($routeParams.productId) {
                    // <- retrieve products data
                    // send to -> view
                    $scope.product = { "productID": $routeParams.productId };
                }

                /**
                 * @param id sku of item
                 */
                $scope.addToCart = function (id) {
                    // -> add in the cart
                    console.log('id add to cart'+id);
                    Cart.addItem(id, 1);
                    console.log('basket '+JSON.stringify( Cart.getBasket() ) );
                };
                $scope.openItem = function (id) {
                    $location.path("/product/" + id);
                };

                // TODO fix : prova barbara
                $scope.$on('dataloaded', function () {
                    $timeout(function () {
			console.log('ok');
                    }, 0, false);
                });

                $scope.$emit('dataloaded');
            }]);
}(document, window));
