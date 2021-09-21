const db = require("../models");
const bcrypt = require('bcrypt')

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
      const { firstName, lastName, email, password } = req.body;

      // Validation
      if (!firstName || !lastName || !email || !password) {
        return res.status(400).json({ msg: 'Please make sure all fields are filled out correctly'})
      }

      db.User
        .find({ email: email })
        .then(() => {
          const newUser = new db.User({
            firstName,
            lastName,
            email,
            password,
          });

          // Salt & Hash Password
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;

              newUser.password = hash;
              newUser.save()
              .then(user => {
                res.json({
                  user: {
                    id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                  }
                })
              })
              .catch(err => res.json(err));
            })
          })
        })
        .catch(err => console.log(err))
    }
  }

