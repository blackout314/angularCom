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
            }).
            */
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
        // ha senso col new? il carrello è solo uno
        Cart.prototype = {
            setData: function (cartData) {
                angular.extend(this, cartData);
            }
        };

        /**
         * basket
         */
        Cart.basket = {};
        /**
         * add item
         */
        Cart.addItem = function (id, quantity) {
            Cart.basket[id] = parseInt(Cart.basket[id]||0) + quantity;
        };
        /**
         * delete item
         */
        Cart.delItem = function (id, quantity) {
            Cart.basket[id] = parseInt(Cart.basket[id]||0) - quantity;
            if (Cart.basket[id] <= 0) {
                delete(Cart.basket[id]);
            }
        };
        /**
         * return basket
         */
        Cart.getBasket = function () {
            return Cart.basket;
        };

        return Cart;
    }]);
    /**
     * Model:User
     */
    store.factory('User', ['$http', function ($http) {
        function User(userData) {
            if (userData) {
                this.setData(userData);
            }
        }
        User.prototype = {
            setData: function (userData) {
                angular.extend(this, userData);
            }
        };
        return User;
    }]);

}(document, window));

