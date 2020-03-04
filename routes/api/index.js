const router = require("express").Router();
const userRoutes = require("./user");
const characterRoutes = require("./character");
const enemiesRoutes = require("./enemies");
const equipmentRoutes = require("./equipment");
const foodRoutes = require("./food");
const potionRoutes = require("./potion");
const randomRoutes = require("./random");
const storyRoutes = require("./story");

// user routes
router.use("/user", userRoutes);
router.use("/character", characterRoutes);
router.use("/enemies", enemiesRoutes);
router.use("/equipment", equipmentRoutes);
router.use("/food", foodRoutes);
router.use("/potion", potionRoutes);
router.use("/random", randomRoutes);
router.use("/story", storyRoutes);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "public", "index.html"));
});

module.exports = router;
