const router = require("express").Router();
const userRoutes = require("./User");
const authRoutes = require("./auth");


// Entry routes
router.use("/user", userRoutes);
router.use("/auth", authRoutes);

module.exports = router;