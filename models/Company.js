const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const companySchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: {type: String, required: false },
  job_posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
  isCompany: { type: Boolean, default: true, required: true }
});

companySchema.plugin(uniqueValidator);

const User = mongoose.model("Company", companySchema);

module.exports = User;