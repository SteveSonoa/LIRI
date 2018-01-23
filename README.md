# An Introduction to LIRI
LIRI is your personal assistant of entertainment! Would you see the latest tweets of your favorite personality? Want to look up a song? Need information on your favorite movie? LIRI is here to help!

### How does it work?
LIRI is a CLI (Command Line Interface) app; it will not function in a web browser or other deployment. It processes the command line arguments to run the code; there is no other internal interface. By including an argument after typing `node liri` in the command line, the program will know where to find the information you're looking for. If there's an incorrect syntax, the app will direct you to use the correct syntax instead.

By running `node liri my-tweets` the app will find the last 20 tweets from our default handle, @RagGnomes. To find the latest tweets from another user, simply include the name as an argument (i.e. `node liri my-tweets IBMWatson`).

`node liri spotify-this-song` along with a song's title will return information on that song from Spotify. `node liri movie-this` with a movie title will provide information from OMDB. The use of quotes around song titles and movie titles is optional.

### Who will use this?
As a server side game with no real GUI or returned code to speak of, the app is fairly useless except as a classroom exercise. It could be expanded by future apps, but not as a stand-alone application.

### What is the goal?
The goal was ultimately to showcase my ability to create and export Javascript Constructors in a Node environment. I've never been satisfied with the minimum expectations, so I also included external API calls and modular text-based art in the project.

# Deployment
Node is required to run this app. After downloading the repository, run `npm install` from the command line to ensure you have the necessary packages.

You will also need to provide your own Spotify and Twitter keys. In the root directory, create a file called .env and include the following code:

```
# Spotify API keys

SPOTIFY_ID=YOUR-KEY-HERE
SPOTIFY_SECRET=YOUR-KEY-HERE

# Twitter API keys

TWITTER_CONSUMER_KEY=YOUR-KEY-HERE
TWITTER_CONSUMER_SECRET=YOUR-KEY-HERE
TWITTER_ACCESS_TOKEN_KEY=YOUR-KEY-HERE
TWITTER_ACCESS_TOKEN_SECRET=YOUR-KEY-HERE
```

When that's complete, simply run `node liri` as described above from the main directory to begin. An Internet connection is required; the app will not run without it.

# Screenshot
![Screenshot](http://www.fullstacksteve.com/wp-content/uploads/2018/01/liri-2.png)

# Credits
Steve Marshall, sole developer
* [Steve's Online Portfolio](http://fullstacksteve.com/)
* [Steve's LinkedIn Profile](https://www.linkedin.com/in/sonoa/)

ASCII Art generated by [Patorjk.com](http://patorjk.com/software/taag/#p=display&f=Small&t=FullStackSteve)