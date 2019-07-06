//Spotify API Key
let spotifyApiKey = "0c13fbb948dc49b19bd7e6675f6ae981";

//Spotify Secret Key
let spotifySecretKey = "cd18afa4db004a5989ef3febaea9a14f";

//YouTube API Key
let youtubeAPIKey = "AIzaSyDuAVXHcx-uIsVKglPzuOODT5RVMnnqztU";

let genre = "";
let artist = "";
let isReal = true;

$.ajax({
    
    url: 'https://api.spotify.com/v1/search?q=Muse&type=track%2Cartist&market=US&limit=10&offset=5',
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
function myLogin() {
    var clientId = 'ae735174e6d74af294e078eeeaa6e5c6'; // from https://developer.spotify.com/dashboard/applications
    var callbackURL = window.location.href; // the current web page
    spotify.login(clientId, callbackURL);
}

function enter(s) {
    //console.log('>' + s);
}
function exit(s) {
    //console.log('<' + s);
}

function setCookie(key, value) {
    enter('setCookie');
    var expires = new Date();
    var minutes = 60; // expires in 60 minutes
    expires.setTime(expires.getTime() + minutes * 60 * 1000);
    document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
    exit('setCookie');
}

function getCookie(key) {
    enter('getCookie: ' + key);
    enter(document.cookie);
    var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    exit(keyValue);
    exit('getCookie');
    return keyValue ? keyValue[2] : null;
}

function clearCookie(key) {
    enter('clearCookie');
    var expires = new Date();
    var hours = -1; // expires in 1 hour ago
    expires.setTime(expires.getTime() + hours * 60 * 60 * 1000);
    document.cookie = key + '=;expires=' + expires.toUTCString();
    exit('setCookie');
}

function clearCookies() {
    document.cookie.split(';').forEach(function(c) {
        document.cookie = c.replace(/^ +/, '').replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/');
    });
}

function setQueryParameters() {
    location.queryString = {};
    location.search
        .substr(1)
        .split('&')
        .forEach(function(pair) {
            if (pair === '') return;
            var parts = pair.split('=');
            location.queryString[parts[0]] = parts[1] && decodeURIComponent(parts[1].replace(/\+/g, ' '));
        });
}

function setHashParameters() {
    location.hashString = {};
    if (window.location.hash) {
        var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
        hash.split('&').forEach(function(pair) {
            if (pair === '') return;
            var parts = pair.split('=');
            location.hashString[parts[0]] = parts[1] && decodeURIComponent(parts[1].replace(/\+/g, ' '));
        });
    }
}

spotify = {
    login: function(clientId, callbackURL) {
        enter('login');
        let authURL = 'https://accounts.spotify.com/authorize';
        var authLink = `${authURL}?client_id=${clientId}&response_type=token&redirect_uri=${callbackURL}`;
        // redirect to the spotify URL - it will call us back with #access_token
        window.location.replace(authLink);
        exit('login');
    },

    logout: function() {
        clearCookie('access_token');
    },

    error: function(results) {
        console.error(results.data);
        alert(`Problem with Spotify - did you login?\n${results.responseJSON.error.message}`);
    },

    call: function(url, data, callbackFunction) {
        $.ajaxSetup({
            headers: {
                Authorization: 'Bearer ' + getCookie('access_token')
            }
        });
        data.cacheBuster = new Date().getTime();
        data.url = url;
        let xhr = $.get(url, data, callbackFunction, 'json') //
            .fail(results => {
                results.data = data;
                spotify.error(results);
            });
    },

    setup: function() {
        // this is the first function called when the page loads
        // go get the hashparameters
        setHashParameters();
        setQueryParameters();

        if (location.hashString['access_token']) {
            // this is the callback with the #access_token on it
            // set the cookie so that it persists for other pages in our site
            setCookie('access_token', location.hashString['access_token']);
        }
    }
};
spotify.setup();

//Used to determine if an Artist or Genre is in fact real. If they aren't, it will let the user know that the genre or artist doesn't exist.
$("#dropdown-item").on("click", function() {
    genre = $("#dropdown-item").text();
    console.log(genre);
    $.ajax({
        url: "https://api.spotify.com/v1/search" + genre,
        success: function(response) {
            callback(response);
        }

    })
});

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