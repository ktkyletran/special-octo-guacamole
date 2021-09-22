const authController = require("../../controllers/authController");
const router = require("express").Router();
const auth = require('../../middleware/auth');


// Create user
router
  .post('/', authController.create);

  router
  .get('/user', auth, authController.findById);

module.exports = router;