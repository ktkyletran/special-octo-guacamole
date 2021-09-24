const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema ({
  job_title: { type: String, required: true },
  salary: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  created: { type: String, required: true },
  applicants: [{ type: Schema.Types.ObjectId, ref: 'Users' }]
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;