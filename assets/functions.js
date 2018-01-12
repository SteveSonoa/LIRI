module.exports = {
	twitter: function() {
		// * This will show your last 20 tweets and when they were created at in your terminal/bash window.
		var Twitter = require('twitter');
		// Add code the code required to import the `keys.js` file and store it in a variable
		var keys = require("../keys.js");

		var client = new Twitter(keys.twitter);

		var userName = "RagGnomes";
		if(process.argv[3]) {
			userName = process.argv[3];
		}

		var params = {screen_name: userName, count: 20};
		client.get('statuses/user_timeline', params, function(error, tweets, response) {
			if (!error) {
				console.log("Here are the last 20 tweets from " + userName + ":");
				console.log("");
				tweets.forEach(function(t) {
				    console.log(t.text);
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

		var songName = "The Sign";
		if(process.argv[3]) {
			songName = process.argv[3];
		}

		spotify.search({ type: 'track', query: songName, limit: 1 }, function(err, data) {
			if (err) {
				return console.log('Error occurred: ' + err);
			}

			console.log("Song Name: " + data.tracks.items[0].name);
			console.log("Artist: " + data.tracks.items[0].artists[0].name);
			console.log("Preview: " + data.tracks.items[0].preview_url);
			console.log('From the album "' + data.tracks.items[0].album.name + '"');
			
			// data.forEach(function(s) {
			// 	console.log(s.items);
			// 	console.log("");
			// });
		});
		// Argument is song name
		//   * Artist(s)

		// * The song's name

		// * A preview link of the song from Spotify
     
		// * The album that the song is from

		// If no song is provided then your program will default to "The Sign" by Ace of Base.

		// You will utilize the [node-spotify-api](https://www.npmjs.com/package/node-spotify-api) package in order to retrieve song information from the Spotify API.
	},
	omdb: function() {
		// Include the request npm package
		var request = require("request");

		// Create the variable movieName. If no movie is provided, the app will return info for Mr. Nobody.
		var movieName = "Mr+Nobody";

		// If the user provided a movie, reset movieName
		if(process.argv.length >= 3) {
			movieName = process.argv[3];
		}

		// If the user provided multiple words, include a single string separated by "+" instead of spaces
		if(process.argv.length > 4) {
			for (var i = 4; i < process.argv.length; i++) {
				movieName = movieName + "+" + process.argv[i];
			}
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