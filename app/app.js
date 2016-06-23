angular.module("ecommerceApp", ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state ('cart', {
    url: '/cart',
    templateUrl: '/cartView/cartView.html',
    controller: 'cartCtrl'
  })
  .state ('admin', {
    url: '/admin',
    templateUrl: '/adminView/adminView.html',
    controller: 'adminCtrl'
  })
  .state ('productView', {
    url: '/products',
    templateUrl: '/productView/productView.html',
    controller: 'productsCtrl'
  })
  .state ('loginView', {
    url: '/login',
    templateUrl: '/loginView/loginView.html',
    controller: 'loginCtrl'
  })
  .state ('homeView', {
    url: '/home',
    templateUrl: '/homeView/homeView.html',
    controller: 'homeCtrl'
  })

  $urlRouterProvider.otherwise('/products');

})

.constant("ref", {
  products: "/api/products"
})
