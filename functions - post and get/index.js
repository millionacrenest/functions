
var firebase = require("firebase");
var request = require("request");
var http = require("http");

firebase.initializeApp({
    serviceAccount: "./key.json",
    databaseURL: "https://ua32-a7286.firebaseio.com"
});

//post from website to firebase
var refWeb = firebase.database().ref('test');

const options = {
    url: 'https://www.ua32.net/frontpage.json',
    method: 'GET',
    headers: {
	'Accept': 'application/json',
        'Accept-Charset': 'utf-8',
        'User-Agent': 'webmaster'
    }
};

request(options, function(err, res, body) {
    let json = JSON.parse(body);
    refWeb.set(json);
});

var refA = firebase.database().ref('about');

refA.on('value', function(snap) {
  console.log('about', snap.val());
 });


// Set the headers
var headers = {
    'User-Agent':       'test:test',
    'Content-Type':     'application/hal+json',
    'X-CSRF-Token':     'amyg09mTc4ak08i0d09GvnH3APmmDdNUN5pxg7JWLpk' 
}

// Configure the request
var options2 = {
    url: 'http://ua32.net',
    method: 'POST',
    headers: headers,
    form: {'key1': 'xxx', 'key2': 'yyy'}
}

// Start the request
request(options2, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        // Print out the response body
        console.log(body)
    }
})

