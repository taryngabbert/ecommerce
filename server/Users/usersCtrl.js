const Users= require ("./Users");

module.exports = {
  //GET REQUEST
  getUsers (req, res, next) {
    Users.find( (req.query), (err,users) => {
      if (err) {return res.send(err); }
      return res.json(users);
    })
  },
  getThisUser (req, res, next) {
      Users.findById( req.params.id, (err, user) => {
      if (err) { return res.send(err); }
      return res.json(user);
    })
  },



  //POST REQUEST
  addUser (req, res, next) {
    new Users(req.body).save( (err, user) => {
      if (err) {return res.send(err); }
      return res.json(user);
    })
  },



  //PUT REQUEST
  editUser (req, res, next) {
    if (!req.params.id) {return res.status(400).send("Navigate into object you want to edit")};
    Users.findByIdAndUpdate(req.params.id, req.body, (err, response) => {
      if (err) { return res.send(err); }
      else {return res.json(response); }
    })
  },

  //DELETE REQUEST
  deleteUser (req, res, next) {
    if (!req.params.id) {return res.status(400).send("Navigate into object you want to delete")};
    Users.findByIdAndRemove(req.params.id, req.body, (err, response) => {
      if (err) { return res.send(err); }
      else {return res.json(response); }
    })
  },

}
