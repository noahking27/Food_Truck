

$("#submitTruck").on("click", function(event){
	event.preventDefault();
	console.log("inside");
	var newTruck = {

		name: $("#foodTruckName").val().trim(),

		food_type: $("#foodType").val().trim(),

		popular_item: $("#bestDish").val().trim(),

		website: $("#webSite").val().trim(),

		twitter_handle: $("#twitterHandle").val().trim()
		
	};

	$.post("/api/enter", newTruck)

	.done(function(data){
		console.log(data);
		alert("Food Truck Added!");
	});

	$("#foodTruckName").val("");
	$("#foodType").val("");
	$("bestDish").val("");
	$("#webSite").val("");
	$("#twitterHandle").val("");

});