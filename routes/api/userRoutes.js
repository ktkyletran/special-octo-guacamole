const userController = require("../../controllers/userController");
const authController = require("../../controllers/authController");
const router = require("express").Router();

// Create user
router
  .route('/register')
  .get(userController.findAll)
  .post(userController.create);

  router
  .route('/login')
  .post(authController.create);

  module.exports = router;
