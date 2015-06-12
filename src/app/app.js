(function (document, window) {
    'use strict';

    /*global angular*/
    var store = angular.module('shoppingCart', [
        'ngRoute',
        'cart',
        'checkout'
    ]);

    store.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({
            redirectTo: '/cart'
        });
    }]);

    /**
     * Model:Product
     */
    store.factory('Product', ['$http', function ($http) {
        function Product(productData) {
            if (productData) {
                this.setData(productData);
            }
        }
        Product.prototype = {
            setData: function (productData) {
                angular.extend(this, productData);
            }
        };
        return Product;
    }]);

}(document, window));
