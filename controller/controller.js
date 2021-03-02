const express = require('express');
const userController = express.Router();
module.exports = userController.get('/', (req, res) => {
   res.status(200).json({
      status: 'user Controller API call successfully'
   });
});
