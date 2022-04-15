const express = require("express");
const router = express.router();

//router.get(route,callback)
router.get("/", (req, res) => res.send("Welcome"));

module.exports = router;
