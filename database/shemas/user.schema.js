const { Schema } = require("mongoose");

const userSchema = new Schema({
    Password: {type: String, required: true},
    email: {type: String, required: true}
});

export default userSchema;