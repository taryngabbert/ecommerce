const productCtrl = require ("./productCtrl");

module.exports = app => {
  app.get('/api/products', productCtrl.getProducts);
  app.get('/api/products/:id', productCtrl.getThisProduct);

  app.post('/api/products', productCtrl.addProduct);

  app.put('/api/products/:id', productCtrl.editProduct);

  app.delete('/api/products/:id', productCtrl.deleteProduct);
}
