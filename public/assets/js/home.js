
// GET REQUEST OF THE TOP TRUCKS
$.get("/api/toptrucks", function(data){

	for (var i = 0; i < //PLACEHOLDER.length 
		; i++) {
		var topTruck = $("<div>");

		topTruck.addClass("top");

		topTruck.attr("id", "topFive" + i);

		$("#WHATEVER ID THEY USE").append(topTruck);

		//Append the data to HTML page
		//MAKE SURE THE DATA.[i].NAME, ETC ARE CORRECT!!!!!!!!!!!!!!
		$("#topFive" + i).append("<h2>" + data[i].name + "</h2>");

		$("#topFive" + i).append("<h2>" + data[i].food_type + "</h2>");

	}
});