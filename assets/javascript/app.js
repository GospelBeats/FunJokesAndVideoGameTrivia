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
$.ajax({
  url: 'https://api.spotify.com/v1/search?q=' + genre + '&type=artist&limit=10',
  headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization:
          'Bearer BQAbwj92_nJtEJCg_wldC1AAZ-MtEkxAGHtyW9fnlNrhoOLluW0zDQf9QexgDM96d_9R4IlKWjQKLoVXaOhlNseJoIxXTYHy6xw6ZYCb0ki3jG6XhSUp2BUvbCMAZ_3cOhCpTXN7Sx3JE1lLgBMDzBSCoT2S5d8gyEYJESQYodIhS_I'
  },
  type: 'GET',
  success: function(result) {
      console.log(result);
  }
});
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