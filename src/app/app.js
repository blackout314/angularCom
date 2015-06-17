(function (document, window) {
    'use strict';

    /*global angular*/
    var store = angular.module('shoppingCart', [
        'ngRoute',
        'products',
        'cart',
        'checkout'
    ]);

    store.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            /*
            when('/cart', {
                controller: 'CartCtrl',
                //templateUrl: "packages/AngularJS-Shop/segments/cart.html",
                private: false
            }).
            when('/product/:productId', {
                templateUrl: "packages/AngularJS-Shop/segments/product.html",
                controller: 'ProductController',
                private  : false
            }).
            when('/checkout', {
                controller: 'CartController',
                templateUrl: "packages/AngularJS-Shop/segments/checkout.html",
                private  : true
            }). */
            otherwise({
                redirectTo: '/products'
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
    /**
     * Model:Cart
     */
    store.factory('Cart', ['$http', function ($http) {
        function Cart(cartData) {
            if (cartData) {
                this.setData(cartData);
            }
        }
        Cart.prototype = {
            setData: function (cartData) {
                angular.extend(this, cartData);
            }
        };
        return Cart;
    }]);

}(document, window));
