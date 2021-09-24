const postController = require("../../controllers/postController");
const router = require("express").Router();

// Create user
router
  .route('/')
  .post(postController.create);

  module.exports = router;
