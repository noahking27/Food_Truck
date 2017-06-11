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

function parseFTData(data) {
	var truckD = data.foodtruckData;
	var twitterD = data.tweetsData;
	var reviewsD = data.reviewsData;

	$("#truckName").text(truckD.name);
	$("#truckDescription").text(twitterD.description);
	$("#averageRating").text("Rating: coming soon");
	$("#cuisine").text("Cuisine: " + truckD.food_type);
	$("#website").text("Website: " + truckD.website);
	$("#twitterHandle").text("Twitter Handle: @" + truckD.twitter_handle);
	
	var tHeader = $("<h5>");
	tHeader.text(truckD.name + " tweets...");
	$("#tweets").append(tHeader);

	var rHeader = $("<h5>");
	rHeader.text("Some real truckin' reviews...");
	$("#currentReviews").append(rHeader);

	for (var i = 0; i < twitterD.tweet.length; i++) {
		var ptag = $("<p>");
		ptag.text(twitterD.created[i] + "  --  " + twitterD.tweet[i]);
		$("#tweets").append(ptag);
	}

	for (var i = 0; i < reviewsD.length; i++) {
		var ptag = $("<p>");
		ptag.text(reviewsD[i].user_name + "says: " + reviewsD[i].review)
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
		review: $("#reviews").val().trim()
	}

	$.post(queryUrl, reviewObject, function(data) {
		setTimeout(alert("Thanks for your review!"), 500);
	});
});

