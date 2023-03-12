const express = require("express");
const router = express.Router();

const weaponsRoutes = require("./weaponsRoutes");
const heroRoutes = require("./herosRoutes");

router.use("/weapon", weaponsRoutes);
router.use("/hero", heroRoutes);

module.exports = router;
