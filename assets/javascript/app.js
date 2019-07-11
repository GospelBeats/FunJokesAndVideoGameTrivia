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
  url: 'https://api.spotify.com',
  method: 'GET'
  }).then(function(result){ 
    console.log(result);
  });

  
function main() {
    // your program here
    console.log("main() started...");
    console.log("main() ended")
}

$('document').ready(main);
$("#genre").on('click', function(e) {

  // assign variable to clicked target attribute
  let genre = e.target.getAttribute('data-src');
  console.log(genre);
});

$("#dropdown-item").on("click", function() {
        event.preventDefault();
        var request = $.get();
        request.done(function(data) {
          DisplaySearchResults(data);
          console.log(data);
        });
})




$("#dropdown-item").on("click", function(){

})