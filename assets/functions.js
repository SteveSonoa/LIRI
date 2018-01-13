function noQuotes(input) {
	var newInput = input[3];
	for (var i = 4; i < input.length; i++) {
		newInput = newInput + "+" + process.argv[i];
	}
	return newInput;
}

var bigLetters = require('./bigLetters.js');

module.exports = {
	twitter: function() {
		// * This will show your last 20 tweets and when they were created at in your terminal/bash window.
		var Twitter = require('twitter');
		// Add code the code required to import the `keys.js` file and store it in a variable
		var keys = require("../keys.js");

		var client = new Twitter(keys.twitter);

		// Create a default userName if one isn't passed
		var userName = "RagGnomes";

		// If a userName is passed, update it. We will not use noQuotes, because userNames are always 1 word.
		if(process.argv[3]) {
			userName = process.argv[3];
		}

		// Create the query with 20 results
		var params = {screen_name: userName, count: 20};
		client.get('statuses/user_timeline', params, function(error, tweets, response) {
			if (!error) {
				bigLetters.titleHeader(userName);
				console.log("Here are the last 20 tweets from " + userName + ":");
				console.log("");
				tweets.forEach(function(t) {
				    console.log(t.text);
					// Add a space between each tweet to make it easier to read the results
				    console.log("");
				});
			}
			else {
				console.log("I'm sorry; I couldn't complete that request.");
			}
		});
	},
	spotify: function() {

		var Spotify = require('node-spotify-api');
		// Add code the code required to import the `keys.js` file and store it in a variable
		var keys = require("../keys.js");

		var spotify = new Spotify(keys.spotify);
		// Create a default song to search for if none are passed
		var songName = "The Sign";

		// If the user passed a song name, update songName
		if(process.argv[3]) {
			songName = noQuotes(process.argv);
			console.log(songName);
		}

		spotify.search({ type: 'track', query: songName, limit: 1 }, function(err, data) {
			if (err) {
				// Suppress the error code in leiu of something more fun.
				return console.log("I'm sorry, Dave. I'm afraid I can't do that.");
			}

			// Returns the requested values for the song selected
			bigLetters.titleHeader(data.tracks.items[0].name);
			console.log("Song Name: " + data.tracks.items[0].name);
			console.log("Artist: " + data.tracks.items[0].artists[0].name);
			console.log("Preview: " + data.tracks.items[0].preview_url);
			console.log('From the album "' + data.tracks.items[0].album.name + '"');
			
		});
	},
	omdb: function() {
		// Include the request npm package
		var request = require("request");

		// Create the variable movieName. If no movie is provided, the app will return info for Mr. Nobody.
		var movieName = "Mr+Nobody";

		// If the user provided a movie, reset movieName
		if(process.argv[3]) {
			movieName = noQuotes(process.argv);
			console.log(movieName);
		}

		// Setup the query to the OMDB API
		var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

		// Then run a request to the OMDB API with the movie specified
		request(queryUrl, function(err, response, body) {
			if(!err && response.statusCode === 200) {
				if(JSON.parse(body).Title === undefined) {
					console.log("I'm sorry; I couldn't find that movie.");
				}
				else {			
					bigLetters.titleHeader(JSON.parse(body).Title);
					console.log(JSON.parse(body).Title);
					console.log("Released in " + JSON.parse(body).Year);
					// If there are no IMDB ratings, the app won't display it
					if(JSON.parse(body).Ratings[0]) {
						console.log("IMDB Rating: " + JSON.parse(body).Ratings[0].Value);
					}
					// If there are no Rotton Tomatoes ratings, the app won't display it
					if(JSON.parse(body).Ratings[1]) {
						console.log("Rotton Tomatoes Rating: " + JSON.parse(body).Ratings[1].Title);
					}
					console.log("Produced in " + JSON.parse(body).Country);
					console.log(JSON.parse(body).Language);
					console.log(JSON.parse(body).Plot);
					console.log("Starring " + JSON.parse(body).Actors);
				}
			}
		});
	},
	footer: function () {
		// Draw the LIRI logo for each query.
		console.log ("                ___       ___       ___       ___   ");
		console.log ("Thanks         /\\__\\     /\\  \\     /\\  \\     /\\  \\  ");
		console.log (" for          /:/  /    _\\:\\  \\   /::\\  \\   _\\:\\  \\ ");
		console.log ("  using      /:/__/    /\\/::\\__\\ /::\\:\\__\\ /\\/::\\__\\");
		console.log ("   LIRI!     \\:\\  \\    \\::/\\/__/ \\;:::/  / \\::/\\/__/");
		console.log ("              \\:\\__\\    \\:\\__\\    |:\\/__/   \\:\\__\\     ©2018 Steve Marshall");
		console.log ("               \\/__/     \\/__/     \\|__|     \\/__/     www.FullStackSteve.com");
		console.log (" ");
	},
	createLog: function () {
		// whatever
	}
};