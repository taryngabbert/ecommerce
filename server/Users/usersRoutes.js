const userCtrl = require ("./usersCtrl");

module.exports = app => {
  app.get('/api/users', userCtrl.getUsers);
  app.get('/api/users/:id', userCtrl.getThisUser);

  app.post('/api/users', userCtrl.addUser);

  app.put('/api/users/:id', userCtrl.editUser);

  app.delete('/api/users/:id', userCtrl.deleteUser);
}
