const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => res.json({ test: "this is working 2" }));

module.exports = router;
