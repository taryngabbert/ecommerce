const mongoose= require('mongoose');

const Products = mongoose.Schema(
  {
    name: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String, required: true},
    imageUrl: String,
    quantity: Number
  }
)

module.exports= mongoose.model('Products', Products);
