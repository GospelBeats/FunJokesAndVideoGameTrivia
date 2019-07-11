$.ajax({
    url: "http://shibe.online/api/shibes?count=42&urls=true&httpsUrls=true",
    method: 'GET'
}).then(function(result) {
console.log(result);
});