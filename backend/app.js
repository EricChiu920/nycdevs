const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const port = 3001;

// Mongodb Config
if(process.env.DB_URL != undefined){
  mongoose.connect(process.env.DB_URL);
  console.log(`Connecting to mongodb`);
  var db = mongoose.connection;
  db.once('open', function() {
    console.log(`Status Code ${mongoose.connection.readyState}, Connected`);
  });

  // When the connection is disconnected
  db.on('disconnected', function() {
    console.log(`error: Mongoose connection disconnected`);
  });

  db.on('error', function() {
    console.log(`error: ERROR Status Code ${mongoose.connection.readyState}`);
  });

} else {
  console.log('error: You are missing a .env file');
  console.log('Create a .env file and fill in the DB_URL param');
}

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function() {
  if(db == undefined){
    console.log('SIGNIT recieved. Process closing.');
    process.exit(0);
  } else {
    db.close(function () {
      console.log('Mongoose default connection disconnected through app termination');
      process.exit(0);
    });
  }
});

let apiRouter = require('./routes/api');
app.use('/api', apiRouter);

app.listen(port);

console.log(`Server Started on PORT ${port}`);
