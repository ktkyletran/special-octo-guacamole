const db = require("../models");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET = require('../config/keys').JWT_SECRET;



module.exports = {
  create: function (req, res) {
    const { firstName, lastName, email, password } = req.body;

    // Validation
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ msg: 'Please make sure all fields are filled out correctly'})
    }

    db.User
      .findOne({ email })
      .then((user) => {
        if (user) return res.status(400).json({ msg: "User already exists under that email" });

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

              jwt.sign(
                { id: user.id },
                JWT_SECRET,
                { expiresIn: 3600 },
                (err, token) => {
                  if (err) throw err;

                  res.json({
                    token,
                    user: {
                      id: user.id,
                      firstName: user.firstName,
                      lastName: user.lastName,
                      email: user.email,
                    }
                  });
                }
              );
            })
            .catch(err => res.json(err));
          });
        });
      })
      .catch(err => console.log(err))
  },
  findAll: function(req, res) {
    db.User
    .find(req.query)
    .sort({date: -1 })
    .then(userList => res.json(userList))
    .catch(err => res.status(422).json(err));
},
};

