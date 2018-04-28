const express = require('express');
const mongoose = require('mongoose');
var app = express();

const port = 3001;

app.listen(port);

console.log(`Server Started on PORT ${port}`);
