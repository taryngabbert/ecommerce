angular.module("ecommerceApp")
.controller('adminCtrl', function($scope, adminService) {
  function getProducts() {
    return adminService.getProducts().then( (response) => {
      $scope.products = response.data;
    })
  };
  getProducts();
  $scope.submitNewProduct = () => {
    const newProduct = {
        name: $scope.newProductName,
        price: $scope.newProductPrice,
        description: $scope.newProductDescription,
        imageUrl: $scope.newProductUrl,
        quantity: $scope.newProductQuantity
    }
    return adminService.submitProduct(newProduct).then( (response) => {
      getProducts();
    });
  };
  $scope.editNow= (product) => {
    const productID= product._id;
    const updatedProduct = {
        name: product.name,
        price: product.price,
        description: product.description,
        imageUrl: product.imageUrl,
        quantity: product.quantity
    };
    return adminService.editProduct(updatedProduct, productID).then(function(response){
      return
    });
  };
  $scope.deleteProduct = (productID) => {
    return adminService.deleteProduct(productID).then( (response) =>{
      return setTimeout(getProducts, 500);
    });
  };
})
