angular.module("ecommerceApp")
.factory('adminService', function($http, ref) {
  return {
      getProducts: function () {
        return $http.get(ref.products);
      },
      submitProduct: function (newProduct) {
        return $http.post(ref.products, newProduct);
      },
      editProduct: function (updatedProduct, productID) {
        return $http.put(`${ref.products}/${productID}`, updatedProduct);
      },
      deleteProduct: function(productID) {
        return $http.delete(`${ref.products}/${productID}`);
      }
  }
})
