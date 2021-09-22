const JWT_SECRET = require('../config/keys').JWT_SECRET;
const jwt = require('jsonwebtoken');

function auth(req, res, next) {
  const token = req.header('x-auth-token');

  // Check for token
  if (!token) {
    res.status(401).json({ msg: 'Unauthorized access'})
  };

  try {
    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET);
  
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json({ msg: err})
  }
};

module.exports = auth
