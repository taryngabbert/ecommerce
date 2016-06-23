angular.module("ecommerceApp")
.factory('productService', function($http, ref) {
  return {
      getProducts: function () {
        return $http.get(ref.products);
      }
  }
})
