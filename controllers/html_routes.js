var path = require("path");
var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "../public/home.html"));
});

router.get("/home", function(req, res) {
	res.sendFile(path.join(__dirname, "../public/home.html"));
});

router.get("/enter", function (req, res) {
	res.sendFile(path.join(__dirname, "../public/add.html"));
});

router.get ("/review", function(req, res) {
	res.sendFile(path.join(__dirname, "../public/reviews.html"));
});

router.get("/about", function(req, res) {
	res.sendFile(path.join(__dirname, "../public/about.html"));
});

module.exports = router;