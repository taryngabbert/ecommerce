angular.module("ecommerceApp")
.controller('productsCtrl', function($scope, productService) {
  function getProducts() {
    return productService.getProducts().then( (response) => {
      $scope.products = response.data;
    })
  }
  getProducts();

})
