/**
 * Project: project name
 * Author: Your Name Here
 * Description: This is a project description...
 * Date: 01/01/2019
 */

 /**
  * GLOBAL VARIABLES
  */

/**
 * GLOBAL FUNCTIONS
 */
function random(min, max) {
	return Math.floor(Math.random() * (max - min +1)) + min;
}

/**
 * The main program
 */
function main() {
    // your program here
    console.log("main() started...");
    console.log("main() ended")
}

$('document').ready(main);

function myLogin() {
    var clientId = '0c13fbb948dc49b19bd7e6675f6ae981'; // from https://developer.spotify.com/dashboard/applications
    var callbackURL = window.location.href; // the current web page
    spotify.login(clientId, callbackURL);
}

$("#dropdown-item").on("click", function() {
    let genre = e.target.getAttribute('data-src');
        var request = $.get("https://api.spotify.com/v1/search?q=" + genre + "&type=track&limit=10");
        request.done(function(data) {
          DisplaySearchResults(data);
          console.log(data);
        });
})




$("#dropdown-item").on("click", function(){

})