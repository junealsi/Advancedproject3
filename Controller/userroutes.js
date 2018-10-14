// http://localhost:3000/user/<Route>

const Router = require('express').Router(),
  User = require('../Models/users.models');

Router.get('/index', (req, res) => {
  User.find({}).exec((error, users) => {
    if (error) {
      res.send(error);
    } else {
      res.send(users);
    }
  });
});

Router.post('/new', (req, res) => {
  let newuser = new User();
  newuser.username = req.body.username;
  newuser.password = req.body.password;
  newuser.isOver21 = req.body.isOver21;

  newuser.save((error, user) => {
    if (error) {
      res.send(error);
    } else {
      res.send(user);
    }
  });
});

Router.put('/update/:id', (req, res) => {
  User.findById(req.params.id, (error, user) => {
    if (error) {
      res.send(error);
    } else {
      user.username = req.body.username || user.username;
      user.password = req.body.password || user.password;
      user.isOver21 = req.body.isOver21 || user.isOver21;
      user.save((err, user) => {
        if (err) {
          res.send(err);
        } else {
          res.send(user);
        }
      });
    }
  });
});

Router.delete('/delete/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id, (error, user) => {
    if (error) {
      res.send(error);
    } else {
      res.send(user);
    }
  });
});

module.exports = Router;
