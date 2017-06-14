var express = require("express");
var aws = require("aws-sdk");
var path = require("path");
var keys = path.join(__dirname + "/awskeys.json");
var router = express.Router();
var multers3 = require("multer-s3");
var multer = require("multer");
var db = require("../models");

aws.config.loadFromPath(keys);
aws.config.update({
	signatureVersion: "v4"
});

var s0 = new aws.S3({});

var upload = multer({
	storage: multers3({
		s3: s0,
		bucket: "truckmenus",
		acl: "public-read",
		metadata: function(req, file, cb) {
			cb(null, {fieldName: file.fieldname});
		},
		key: function (req, file, cb) {
			console.log(file);
			cb(null, Date.now().toString() + file.originalname);
		}
	})
});

router.post("/menu", upload.any(), function(req, res, next) {
	console.log(req.body.truckname);
	console.log(req.files[0].location);
	db.Foodtrucks.update({
		menu_download: req.files[0].location
	}, {
		where: {
			name: req.body.truckname
		}
	}).then(function(dbFoodtrucks) {
		res.redirect("/enter");
	});
});

module.exports = router;