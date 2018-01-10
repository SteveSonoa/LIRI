require("dotenv").config();
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');

// Add code the code required to import the `keys.js` file and store it in a variable
var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var functions = require('./assets/functions.js');




if(process.argv[2] === "my-tweets") {
	console.log(typeof functions.twitter);

	// typeof functions.createLog;
}
else if (process.argv[2] === "spotify-this-song") {
	// var spotify = require('./assets/spotify.js');
	// console.log(typeof functions.spotify);

	// typeof functions.createLog;
}
else if (process.argv[2] === "movie-this") {
	functions.omdb();

	// typeof functions.createLog;
}
else if (process.argv[2] === "do-what-it-says") {

	// typeof functions.createLog;
}
else {
	console.log("I didn't recognize that command. Please use \"my-tweets\", \"spotify-this-song\", \"movie-this\", or \"do-what-it-says\".");

	// typeof functions.createLog;
}


functions.footer();