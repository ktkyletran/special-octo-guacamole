const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema ({
  _id: Schema.Types.ObjectId,
  company: { type: Schema.Types.ObjectId, ref: 'Company' },
  job_title: { type: String, required: false },
  salary: { type: String, required: true},
  location: { type: String, required: true},
  description: { type: String, required: true},
  created: {
    type: Date,
    get: function() {
      return moment(this.getDataValue('DateTime')).format('MM-DD-YYYY')
    },
    defaultValue: 'N/A'
  },
  applicants: [{ type: Schema.Types.ObjectId, ref: 'Users' }]
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;