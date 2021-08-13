const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// All routes go here
router.use("/api", apiRoutes);

router.use((req, res) => {
	res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;