require("dotenv").config();

// Load the fs package to read and write
var fs = require("fs");

// Load external files & functions
var functions = require('./assets/functions.js');
var bigLetters = require('./assets/bigLetters.js');

if(process.argv[2] === "my-tweets") {
	functions.twitter();
	functions.createLog();
}
else if (process.argv[2] === "spotify-this-song") {
	functions.spotify();
	functions.createLog();
}
else if (process.argv[2] === "movie-this") {
	functions.omdb();
	functions.createLog();
}
else if (process.argv[2] === "do-what-it-says") {
   // * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
	// We will read the existing bank file
	fs.readFile("random.txt", "utf8", function(err, data) {
		if (err) {
			return console.log("ERROR: " + err);
			functions.createLog(err);
		}

		// Break down the values inside random.txt
		data = data.split(",");

		// Find the command to run
		if(data[0] === "my-tweets") {
			functions.twitter(data[1]);
		}
		else if(data[0] === "spotify-this-song") {
			functions.spotify(data[1]);
		}
		else if(data[0] === "movie-this") {
			functions.omdb(data[1]);
		}
		else {
			console.log("I'm sorry; random.txt doesn't have a valid search command for me.");
		}
	});
   //   * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
	functions.createLog();
}
else {
	console.log("I didn't recognize that command. Please use one of the following:");
	console.log(" node liri my-tweets handle (handle is optional)");
	console.log(" node liri spotify-this-song song title (song title is optional)");
	console.log(" node liri movie-this movie title (movie title is optional)");
	console.log(" node liri do-what-it-says");
	functions.createLog();
}

functions.footer();