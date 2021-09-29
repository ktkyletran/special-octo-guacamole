const db = require("../models");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET = require('../config/keys').JWT_SECRET;


module.exports = {
  create: function (req, res) {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({ msg: 'Please make sure all fields are filled out correctly'})
    };

    db.User
      .findOne({ email: email })
      .then(user => {
        if (!user) return res.status(400).json({ msg: 'Email does not exist' })

        // Validate Password
        bcrypt.compare(password, user.password)
          .then(isMatch => {
            if (!isMatch) return res.status(400).json({ msg: 'Invalid password' });

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
      })
      .catch(err => console.log(err))
  },
  findById: function(req, res) {
    console.log(req.headers)
    db.User
      .findById(req.user.id)
      .select('-password')
      .then(user => res.json(user))
      .catch(err => res.json({ msg: err }));
  },
}

