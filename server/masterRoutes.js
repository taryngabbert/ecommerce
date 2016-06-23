const productRoutes= require("./products/productRoutes");
const userRoutes= require("./Users/usersRoutes");


module.exports = app => {
  productRoutes(app);
  userRoutes(app);
}
