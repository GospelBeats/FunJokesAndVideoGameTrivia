//Spotify API Key
let spotifyApiKey = "0c13fbb948dc49b19bd7e6675f6ae981";

//Spotify Secret Key
let spotifySecretKey = "cd18afa4db004a5989ef3febaea9a14f";

//YouTube API Key
let youtubeAPIKey = "AIzaSyDuAVXHcx-uIsVKglPzuOODT5RVMnnqztU";

let genre = "";
let artist = "";
let isReal = true;

//Authorizes the user
    $.ajax({
        method: "POST",
        url: 'https://api.spotify.com/api/token',
        data: {
            "grant_type": "authorization_code",
            "code": code,
            "redirect_uri": myUrl,
            "client_secret": spotifySecretKey,
            "client_id": spotifyApiKey,

        },
        success: function(response) {
            console.log("Success");
        }
})
//Used to determine if an Artist or Genre is in fact real. If they aren't, it will let the user know that the genre or artist doesn't exist.
function isReal() { 
    
}

//Sends a call to Spotify in order to get the top rated songs from an artist under that genre. 
function getGenre() { 

}

//Used to get the top rated artists information from Spotify including their albums and top rated songs.
function getArtists() { 

}

//Used to acquire the songs from Spotify
function getSong() { 

}

//Returns the video from YouTube for that specific song by that specific artist.
function getVideo() {

}