var fs = require("fs");
var request = require("request");
var twitterKeys = require("./keys.js");
var Twitter = require("twitter");
var input = process.argv[2];


//Twitter if statement works with the below var client. Without it, it's not working.
var client = new Twitter({
  consumer_key: 'FVYgOmPOsJw65PqVjwYHYF4td',
  consumer_secret: 'o6dBjqowHV09TqFo2U2bBBCm4Q0ijbXvk9QYdAsOvGHqT6wK9S',
  access_token_key: '1330407073-dCe8D9KrZgLZzwbk10wrl3k2S5wUv0BCvRKDM7L',
  access_token_secret: 'WKaMbf2QqwZcNb3G8LnoLOyTe4ike96c2HUARQYPEDmVD'
});

if (input === "tweets") {
	var params = {screen_name: 'NCBulkogi'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
     //Use this to view the whole JSON object
     // console.log('Tweets ' + JSON.stringify(response, null, 2));
     for (i = 0; i < tweets.length; i++){
     	console.log("Tweets: " + tweets[i].text);
     }

    
  }
});
}