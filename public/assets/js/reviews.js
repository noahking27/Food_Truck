getFoodTrucks();

function getFoodTrucks() {
	$.get("/api/foodtrucks", function(data) {
		for (var i = 0; i < data.length; i++) {
			var li = $("<li>");
			var link = $("<a>").addClass("ftNames").attr("href", "#").text(data[i].name);
			li.append(link);
			$("#currentTrucks").append(li);
		}

		$(".ftNames").on("click", function(event) {
			event.preventDefault();
			$("#selectedTruck").text($(this).text());
			$("#myModalLabel").text($(this).text());
			$("#tweets").empty();
			$("#currentReviews").empty();
			$("#received").text("");
			getFoodTruckData($(this).text());
		});
	});
}

function getFoodTruckData(ft) {
	var queryUrl = "/api/reviews/" + ft;

	$.get(queryUrl, function(data) {
		console.log(data);
		parseFTData(data);
	});
}

//AS OF NOW, WE ARE ONLY DISPLAYING THE REVIEWER'S NAME AND REVIEW, BUT WE CAN DISPLAY THEIR FAVORITE FOOD AND THEIR ACTUAL RATING IF WE WANT TO
function parseFTData(data) {
	var truckD = data.foodtruckData;
	var twitterD = data.tweetsData;
	var reviewsD = data.reviewsData;

	$("#truckName").text(truckD.name);
	$("#averageRating").text("Rating: " + truckD.current_rating);
	$("#totalRatings").text("Total reviews: " + truckD.total_ratings);
	$("#cuisine").text("Cuisine: " + truckD.food_type);
	$("#truckReviews").text("Some real truckin' reviews...");

	if (truckD.website !== "www.nosite.com") {
		var link = $("<a>");
		link.attr("href", "http://" + truckD.website);
		link.attr("target", "_blank");
		link.text(truckD.website);
		$("#website").text("Website: ");
		$("#website").append(link);
	}

	if (!twitterD) {
		$("#twitterHandle").text("This truck is old school and has no twitter.");
	} else {
		$("#truckDescription").text(twitterD.description);
		$("#twitterHandle").text("Twitter Handle: @" + truckD.twitter_handle);

		var tHeader = $("<h5>");
		tHeader.text(truckD.name + " tweets...");
		$("#tweets").append(tHeader);

		for (var i = 0; i < twitterD.tweet.length; i++) {
			var ptag = $("<p>");
			ptag.text(twitterD.created[i] + "  --  " + twitterD.tweet[i]);
			$("#tweets").append(ptag);
		}
	}

	if (!reviewsD) {
		$("#truckReviews").text("There are no reviews yet for this truck. Be the first to review!");
	} else {
		for (var i = 0; i < reviewsD.length; i++) {
			var ptag = $("<p>");
			ptag.text(reviewsD[i].user_name + " says: " + reviewsD[i].review)
			$("#currentReviews").append(ptag);
		}
	}

	$("#ftInfo").css("display", "block");
}

$("#reviewSubmit").on("click", function(event) {
	event.preventDefault();
	var queryUrl = "/api/review/" + $("#myModalLabel").text();

	var reviewObject = {
		user_name: $("#userName").val().trim(),
		rating: $("#rating").val().trim(),
		fav_food: $("#exampleFavFood").val().trim(),
		review: $("#reviews").val().trim()
	}

	$.post(queryUrl, reviewObject, function(data) {
		$("#averageRating").text("Rating: " + data[0]);
		$("#totalRatings").text("Total reviews: " + data[1]);
		var ptag = $("<p>");
		ptag.text(reviewObject.user_name + " says: " + reviewObject.review);
		$("#truckReviews").text("Some real truckin' reviews...");
		$("#currentReviews").prepend(ptag);
		$("#userName").val("");
		$("#rating").val("");
		$("#exampleFavFood").val("");
		$("#reviews").val("");
		$("#received").text("Thanks for your review!");
	});
});

