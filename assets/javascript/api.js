//Spotify API Key
let spotifyApiKey = "0c13fbb948dc49b19bd7e6675f6ae981";
//TasteDive API (Quota, maximum allowed requests per hour 300 use contact form if more needed)
let tasteDiveAPIKey = "339618-Top10Gen-P67EVD3K";
//base endpoint and example https://tastedive.com/api/similar?q=red+hot+chili+peppers%2C+pulp+fiction

$("button").on("click", function () {
  // In this case, the "this" keyword refers to the button that was clicked
  var topGenre = $(this).attr("data-person");

  // Constructing a URL to search TasteDive for the name of the person who said the quote
  var queryURL = "https://tastedive.com/api/similar?q=" +
    topGenre + "k=339618-Top10Gen-P67EVD3K";
  console.log(queryURL);

  // Performing our AJAX GET request
  $.ajax({
    url: queryURL,
    method: "GET"
  })
         // After the data comes back from the API
         .then(function(response) {
          // Storing an array of results in the results variable
          var results = response.data;

          // Looping over every result item
          for (var i = 0; i < results.length; i++) {

            // Only taking action if the photo has an appropriate rating
            if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
              // Creating a div for the gif
              var gifDiv = $("<div>");

              // Storing the result item's rating
              var rating = results[i].rating;

              // Creating a paragraph tag with the result item's rating
              var p = $("<p>").text("Rating: " + rating);

              // Creating an image tag
              var personImage = $("<img>");

              // Giving the image tag an src attribute of a proprty pulled off the
              // result item
              personImage.attr("src", results[i].images.fixed_height.url);

              // Appending the paragraph and personImage we created to the "gifDiv" div we created
              gifDiv.append(p);
              gifDiv.append(personImage);

              // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
              $("#gifs-appear-here").prepend(gifDiv);
            }
          }
        });
    });
// let genre = "";
//   let artist = "";
//   //let isReal = true;
//   //Used to determine if an Artist or Genre is in fact real. If they aren't, it will let the user know that the genre or artist doesn't exist.
//   function isReal() {

//   }

//   //Sends a call to Spotify in order to get the top rated songs from an artist under that genre. 
//   function getGenre() {

//   }

//   //Used to get the top rated artists information from Spotify including their albums and top rated songs.
//   function getArtists() {

//   }

//   //Used to acquire the songs from Spotify
//   function getSong() {

//   }

//Returns the video from YouTube for that specific song by that specific artist.
function getVideo() {

}

