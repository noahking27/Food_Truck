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
	$("#averageRating").text("coming soon");
	$("#cuisine").text(truckD.food_type);
	$("#website").text(truckD.website);
	$("#twitterHandle").text("@" + truckD.twitter_handle);

	for (var i = 0; i < twitterD.length; i++) {
		$("#tweets").text(twitterD[i] + "\n\n")
	}

	for (var i = 0; i < reviewsD.length; i++) {
		$("#currentReviews").text(reviewsD[i].user_name + "says: \n" + reviewsD[i].review + "\n\n");
	}

	$("#ftInfo").css("display", "block");
}