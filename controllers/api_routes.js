var express = require("express");
var router = express.Router();
var db = require("../models");

//THIS WILL FILL THE DROPDOWN WITH ALL OUR FOODTRUCK NAMES
router.get("/foodtrucks", function(req, res) {
	db.Foodtrucks.findAll({ order: "name ASC" }).then(function(dbFoodtrucks) {
		var data = [];
		for (var i = 0; i < dbFoodtrucks.length; i++) {
			data.push(dbFoodtrucks[i].dataValues);
		}
		res.json(data);
	});
});

//THIS WILL RETRIEVE ALL THE DATA WE NEED TO DISPLAY THE FOODTRUCK INFO, ITS RATINGS, AND ITS REVIEWS
router.get("/reviews/:ftName", function(req, res) {
	db.Foodtrucks.findOne({
		where: {
			name: req.params.ftName
		}
	}).then(function(dbFoodtrucks) {
		var data = {
			foodtruckData: dbFoodtrucks.dataValues,
			reviewsData: []
		}

		db.Reviews.findAll({
			where: {
				FoodtruckId: dbFoodtrucks.dataValues.id
			}
		}).then(function(dbReviews) {
			for (var i = 0; i < dbReviews.length; i++) {
				data.reviewsData.push(dbReviews[i].dataValues);
			}

			//TWITTER LOGIC MIGHT GO HERE

			res.json(data);
		});
	});
});

//THIS WILL ADD THE FOODTRUCK TO THE DATABASE. IT'S NOT SET UP TO RECEIVE FILE UPLOADS YET, BUT HOPEFULLY WE'LL MAKE THAT HAPPEN!
router.post("/enter", function(req, res) {
	var object = req.body;
	db.Foodtrucks.create({
		name: object.name,
		food_type: object.type,
		popular_item: object.dish,
		website: object.website,
		twitter_handle: object.twitter
	}).then(function(dbFoodtrucks) {
		res.json("thank you");
	});
});

//THIS WILL ADD A USER'S REVIEW TO THE DATABASE.
router.post("/review/:ftName", function(req, res) {
	var object = req.body;
	db.Foodtrucks.findOne({
		attributes: ["id"],
		where: {
			name: req.params.ftName
		}
	}).then(function(dbFoodtrucks) {
		db.Reviews.create({
			//assuming the req object matches these keys...
			user_name: object.user_name,
			rating: object.rating,
			review: object.review,
			FoodtruckId: dbFoodtrucks.dataValues.id
		}).then(function(dbReviews) {
			res.json("thank you");
		});
	});
});

module.exports = router;