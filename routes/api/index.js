const router = require("express").Router();
const userRoutes = require("./userRoutes");
const companyRoutes = require("./companyRoutes");
const authRoutes = require("./authRoutes");
const postRoutes = require("./postRoutes");


// Entry routes
router.use("/user", userRoutes);
router.use("/company", companyRoutes);
router.use("/post", postRoutes);
router.use("/auth", authRoutes);

module.exports = router;