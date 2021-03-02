const express = require('express');
const userController = express.Router();
const User = require('../database/models/user.model.js')
   userController.get('/', (req, res) => {
      User.find({},(err, result)=>{
         res.status(200).json({
            data:result
         })
      })
});
userController.post('/add-user', (req,res)=> {
   const{email, password} = req.body;
   const userData = {
      email: email,
      Password : password
   };
   const newUser= new User(userData);
   newUser.save().then(data=>{
      res.status(200).send(data);
   })
   .catch(err=> {
      res.status(400).send("unable to save to database")
   })
})
module.exports = userController;

