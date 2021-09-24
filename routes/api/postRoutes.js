const postController = require("../../controllers/postController");
const router = require("express").Router();

// Create user
router
  .route('/')
  .get(postController.findAll)
  .post(postController.create);

  module.exports = router;
