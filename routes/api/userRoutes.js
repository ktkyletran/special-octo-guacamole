const userController = require("../../controllers/userController");
const router = require("express").Router();

// Create user
router
  .route('/')
  .post(userController.create);

  module.exports = router;
