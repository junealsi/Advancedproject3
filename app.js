const express = require('express'),
  app = express(),
  mongodb = require('mongodb'),
  mongoose = require('mongoose'),
  port = process.env.PORT || 3000,
  myDB = 'mongodb://localhost/advancedproject3',
  User = require('./Models/users.models.js'),
  UserRoutes = require('./Controller/userroutes'),
  bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(myDB);
app.use('/user', UserRoutes); // http://localhost:3000/user/<Route>

app.listen(port, error => {
  if (!error) {
    console.log(`listenig on port ${port}`);
  } else {
    console.log(error);
  }
});
