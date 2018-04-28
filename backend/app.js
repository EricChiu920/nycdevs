const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
var app = express();

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
  db.on('disconnected', function () {
    console.log(`error: Mongoose connection disconnected`);
  });

  db.on('error', function(){
    console.log(`error: ERROR Status Code ${mongoose.connection.readyState}`);
  });

} else{
  console.log(`error: You are missing a .env file`);
  console.log(`Create a .env file and fill in the DB_URL param`);
}

app.listen(port);

console.log(`Server Started on PORT ${port}`);
