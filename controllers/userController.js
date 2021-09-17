const db = require("../models");

module.exports = {
    findById: function(req, res) {
        db.User
        .findOne({user_id: req.params.id})
        .then(userData => res.json(userData))
        .catch(err => res.json(err));
    },
    findAll: function(req, res) {
      db.User
      .find(req.query)
      .then(userData => res.json(userData))
      .catch(err => res.json(err));
    },
    create: function (req, res) {
        db.User
        .create(req.body)
        .then(userData => res.json(userData))
        .catch((err) => {
          return err
        });
    }
}