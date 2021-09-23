const db = require("../models");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET = require('../config/keys').JWT_SECRET;



module.exports = {
  create: function (req, res) {
    const { name, location, email, password, isCompany } = req.body;

    // Validation
    if (!name || !location || !email || !password) {
      return res.status(400).json({ msg: 'Please make sure all fields are filled out correctly'})
    }

    db.Company
      .findOne({ email: email })
      .then(() => {
        const newCompany = new db.Company({
          name,
          location,
          email,
          password,
          isCompany
        });

        // Salt & Hash Password
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newCompany.password, salt, (err, hash) => {
            if (err) throw err;

            newCompany.password = hash;
            newCompany.save()
            .then(company => {

              jwt.sign(
                { id: company.id },
                JWT_SECRET,
                { expiresIn: 3600 },
                (err, token) => {
                  if (err) throw err;

                  res.json({
                    token,
                    company: {
                      id: company.id,
                      name: company.name,
                      location: company.location,
                      email: company.email,
                      isCompany: company.isCompany,
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
  }
};

