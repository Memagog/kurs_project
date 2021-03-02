const express = require('express');
const bodyParser = require("body-parser");
const userController = require("./controller/controller.js"); 
const mongoose = require('mongoose')
// Init an Express App. 
const app = express();
// Use your dependencies here
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// use all controllers(APIs) here
app.use("/", userController);
// Start Server here
app.listen(8080, () => {
  console.log('Server is running on port 8080!');
  mongoose.connect("mongodb://localhost/test").then( ()=> {
    console.log('Databse is connected');
  })
});