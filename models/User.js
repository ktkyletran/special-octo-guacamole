const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  picture: {type: String, required: false },
  liked_posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
  applied: [{ type: Schema.Types.ObjectId, ref: 'Post' }]
});

userSchema.plugin(uniqueValidator, { message: 'Email already exists'});

const User = mongoose.model("User", userSchema);

module.exports = User;