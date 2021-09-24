const userController = require("../../controllers/userController");
const router = require("express").Router();

// Create user
router
  .route('/')
  .get(userController.findAll)
  .post(userController.create);

  module.exports = router;
