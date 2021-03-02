const mongoose  = require("mongoose");
const  userSchema  = require("../shemas/user.schema");

const User = mongoose.model("User", userSchema);

module.exports =  User;