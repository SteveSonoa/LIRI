require("dotenv").config();




var functions = require('./assets/functions.js');
var bigLetters = require('./assets/bigLetters.js');




if(process.argv[2] === "my-tweets") {
	functions.twitter();

	// typeof functions.createLog;
}
else if (process.argv[2] === "spotify-this-song") {
	functions.spotify();

	// typeof functions.createLog;
}
else if (process.argv[2] === "movie-this") {
	functions.omdb();

	// typeof functions.createLog;
}
else if (process.argv[2] === "do-what-it-says") {
   // * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
     
   //   * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
	// typeof functions.createLog;
}
else {
	console.log("I didn't recognize that command. Please use \"my-tweets\", \"spotify-this-song\", \"movie-this\", or \"do-what-it-says\".");

	// typeof functions.createLog;
}


functions.footer();