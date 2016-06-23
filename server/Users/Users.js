const mongoose= require('mongoose');

const Users = mongoose.Schema(
  {
    firstName: {type: String, required: true},
    lastName: {type: Number, required: true},
    email: {type: String, required: true},
    password: String,
  }
)

module.exports= mongoose.model('Users', Users);
