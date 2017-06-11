

$("#submitTruck").on("click", function(event){
	event.preventDefault();

	var newTruck = {

		name: $("#foodTruckName").val().trim(),

		food_type: $("#foodType").val().trim(),

		popular_item: $("#bestDish").val().trim(),

		website: $("#webSite").val().trim(),

		twitter_handle: $("#twitterHandle").val().trim()
		
	};

	console.log(newTruck);

	$.post("/api/enter", newTruck)

	.done(function(data){
		console.log(data);
		alert("Food Truck Added!");
		$("#foodTruckName").val("");
		$("#foodType").val("");
		$("bestDish").val("");
		$("#webSite").val("");
		$("#twitterHandle").val("");
	});
});