const router = require("express").Router();
const userRoutes = require("./User");


// Entry routes
router.use("/user", userRoutes);

module.exports = router;