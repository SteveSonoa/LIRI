module.exports = {
	twitter: function() {

	},
	spotify: function() {

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