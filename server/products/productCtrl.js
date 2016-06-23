const Products= require ("./Products");

module.exports = {
  //GET REQUEST
  getProducts (req, res, next) {
    Products.find( (req.query), (err,products) => {
      if (err) {return res.send(err); }
      return res.json(products);
    })
  },
  getThisProduct (req, res, next) {
      Products.findById( req.params.id, (err, product) => {
      if (err) { return res.send(err); }
      return res.json(product);
    })
  },



  //POST REQUEST
  addProduct (req, res, next) {
    new Products(req.body).save( (err, product) => {
      if (err) {return res.send(err); }
      return res.json(product);
    })
  },



  //PUT REQUEST
  editProduct (req, res, next) {
    if (!req.params.id) {return res.status(400).send("Navigate into object you want to edit")};
    Products.findByIdAndUpdate(req.params.id, req.body, (err, response) => {
      if (err) { return res.send(err); }
      else {return res.json(response); }
    })
  },

  //DELETE REQUEST
  deleteProduct (req, res, next) {
    if (!req.params.id) {return res.status(400).send("Navigate into object you want to delete")};
    Products.findByIdAndRemove(req.params.id, req.body, (err, response) => {
      if (err) { return res.send(err); }
      else {return res.json(response); }
    })
  },

}
