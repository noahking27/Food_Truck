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
	var ratingsD = data.ratingsData;

	$("#truckName").text(truckD.name);
	$("#truckDescription").text(twitterD.description);
	$("#averageRating").text("Rating: " + ratingsD);
	$("#cuisine").text("Cuisine: " + truckD.food_type);
	$("#website").text("Website: " + truckD.website);
	$("#twitterHandle").text("Twitter Handle: @" + truckD.twitter_handle);
	
	var tHeader = $("<h5>");
	tHeader.text(truckD.name + " tweets...");
	$("#tweets").append(tHeader);


	for (var i = 0; i < twitterD.tweet.length; i++) {
		var ptag = $("<p>");
		ptag.text(twitterD.created[i] + "  --  " + twitterD.tweet[i]);
		$("#tweets").append(ptag);
	}

	for (var i = 0; i < reviewsD.length; i++) {
		var ptag = $("<p>");
		ptag.text(reviewsD[i].user_name + " says: " + reviewsD[i].review)
		$("#currentReviews").append(ptag);
	}

	$("#ftInfo").css("display", "block");
}

$("#reviewSubmit").on("click", function(event) {
	event.preventDefault();
	console.log($("#myModalLabel").text());
	var queryUrl = "/api/review/" + $("#myModalLabel").text();

	var reviewObject = {
		user_name: $("#userName").val().trim(),
		rating: $("#rating").val().trim(),
		fav_food: $("#exampleFavFood").val().trim(),
		review: $("#reviews").val().trim()
	}

	$.post(queryUrl, reviewObject, function(data) {
		$("#averageRating").text("Rating: " + data);
		var ptag = $("<p>");
		ptag.text(reviewObject.user_name + " says: " + reviewObject.review);
		$("#currentReviews").prepend(ptag);
		$("#userName").val("");
		$("#rating").val("");
		$("#exampleFavFood").val("");
		$("#reviews").val("");
		$("#received").text("Thanks for your review!");
	});
});

