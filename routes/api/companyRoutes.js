const companyController = require("../../controllers/companyController");
const router = require("express").Router();

// Create user
router
  .route('/')
  .post(companyController.create);

  module.exports = router;
