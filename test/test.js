"use strict";

var should = require("chai").should();

var api = require("../controllers/api_routes.js");
var avg = api.average;


console.log(avg);

describe("Average", function(){
	it("should find the average of all ratings for a food truck", function (){
		avg(4,2).should.equal(2);
	});
	it("should throw when not passed numbers", function(){
		(function(){
			avg(4, "2");
		}).should.throw(Error);
	});
});