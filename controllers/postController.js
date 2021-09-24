const db = require("../models");

module.exports = {
  create: function (req, res) {
    const { job_title, salary, location, description, created } = req.body;

    // Validation
    if ( !job_title || !salary || !location || !description ) {
      return res.status(400).json({ msg: 'Please make sure all fields are filled out correctly'})
    }

    const newPost = new db.Post({
      job_title,
      salary,
      location,
      description,
      created
    });

    db.Post
      .create(newPost)
      .then(postData => res.json(postData))
      .catch(err => {
        console.log(err)
      });
  },
  findAll: function(req, res) {
    db.Post
    .find(req.query)
    .sort({date: -1 })
    .then(postList => res.json(postList))
    .catch(err => res.status(422).json(err));
},
};

