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

        .controller('ProductsCtrl', ['$scope', 'Product', '$routeParams', '$location', function ($scope, Product, $routeParams, $location) {
            $scope.products = {
                "sku1" : new Product( { "sku": "001", "name": "product1", "value":11 } ),
                "sku2" : new Product( { "sku": "002", "name": "product2", "value":12 } )
            };

            if ($routeParams.productId) {
                console.log('ok');
                $scope.product = { "productID": $routeParams.productId };
            }

            /**
             * @param id sku of item
             */
            $scope.addToCart = function (id) {
                //console.log('id add to cart'+id);
            };
            $scope.openItem = function (id) {
                $location.path("/product/"+id);
            };
        }]);
}(document, window));
