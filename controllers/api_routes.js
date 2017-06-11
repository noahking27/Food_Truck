var express = require("express");
var router = express.Router();
var db = require("../models");
var Twitter = require("twitter");
var myKeys = require("../twitter_config/keys.js");
var twitterClient = new Twitter(myKeys.twitterKeys);

//THIS WILL PRODUCE THE TOP 6 FOOD TRUCKS
router.get("/toptrucks", function(req, res) {
	db.Ratings.findAll({ order: "current_rating DESC", limit: 6 }).then(function(dbRatings) {
		res.json(dbRatings);
	});
});

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
			reviewsData: [],
			ratingsData: 0,
			tweetsData: {
				created: [],
				tweet: [],
				description: ""
			}
		}

		db.Reviews.findAll({
			where: {
				FoodtruckId: dbFoodtrucks.dataValues.id
			}
		}).then(function(dbReviews) {

			db.Ratings.findOne({
				attributes: ["current_rating"],
				where: {
					FoodtruckId: dbFoodtrucks.dataValues.id
				}
			}).then(function(dbRatings) {

				data.ratingsData = dbRatings.dataValues.current_rating;

				for (var i = 0; i < dbReviews.length; i++) {
					data.reviewsData.push(dbReviews[i].dataValues);
				}

				//TWITTER LOGIC MIGHT GO HERE
				var params = { screen_name: dbFoodtrucks.dataValues.twitter_handle, count: "3" };
				console.log(params);
				twitterClient.get('statuses/user_timeline', params, function(error, tweets, response) {
				  	if (!error) {
				  		data.tweetsData.description = tweets[0].user.description;

				     	for (var i = 0; i < tweets.length; i++) {
				     		var trunc = tweets[i].created_at.slice(0, 10);
				     		data.tweetsData.created.push(trunc);
				     		data.tweetsData.tweet.push(tweets[i].text);
				     	}
				     	console.log(data);
				     	res.json(data);
				  	}
				});
			});
		});
	});
});

//THIS WILL ADD THE FOODTRUCK TO THE DATABASE. IT'S NOT SET UP TO RECEIVE FILE UPLOADS YET, BUT HOPEFULLY WE'LL MAKE THAT HAPPEN!
router.post("/enter", function(req, res) {
	var object = req.body;

	if (object.twitter_handle.charAt(0) === "@") {
		object.twitter_handle = object.twitter_handle.substr(1);
	}

	if (!(object.website.includes("www."))) {
		object.website = "www." + object.website;
	}
	
	console.log(object);
	db.Foodtrucks.create({
		name: object.name,
		food_type: object.food_type,
		popular_item: object.popular_item,
		website: object.website,
		twitter_handle: object.twitter_handle
	}).then(function(dbFoodtrucks) {
		db.Ratings.create({
			current_rating: 0,
			truck_name: object.name,
			FoodtruckId: dbFoodtrucks.dataValues.id
		}).then(function(dbRatings) {
			res.json("thank you");
		});
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
			fav_food: object.fav_food,
			review: object.review,
			FoodtruckId: dbFoodtrucks.dataValues.id
		}).then(function(dbReviews) {
			var ratingsArray = [];
			var avgRating = 0;
			db.Reviews.findAll({
				attributes: ["rating"],
				where: {
					FoodtruckId: dbFoodtrucks.dataValues.id
				}
			}).then(function(dbFTRatings) {
				for (var i = 0; i < dbFTRatings.length; i++) {
					ratingsArray.push(dbFTRatings[i].dataValues.rating);
				}

				for (var i = 0; i < ratingsArray.length; i++) {
					avgRating += ratingsArray[i];
				}

				avgRating = avgRating / ratingsArray.length;
				updateRatings(avgRating, dbFoodtrucks.dataValues.id);
				res.json(avgRating.toFixed(1));
			});
		});
	});
});

function updateRatings (avg, id) {
	db.Ratings.update({
		current_rating: avg,
	}, {
		where: {
			FoodtruckId: id
		}
	}).then(function(dbRatings) {});
}

module.exports = router;