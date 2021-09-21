const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const companySchema = new Schema({
  _id: Schema.Types.ObjectId,
  company_name: { type: String, required: true },
  location: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: {type: String, required: false},
  job_posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }]
});

companySchema.plugin(uniqueValidator);

const User = mongoose.model("Company", companySchema);

module.exports = User;