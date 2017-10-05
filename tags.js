var firebase = require("firebase");
const request = require('request');

firebase.initializeApp({
    serviceAccount: "./key.json",
    databaseURL: "https://ua32-a7286.firebaseio.com"
});




var refWeb = firebase.database().ref('tags');


const options = {  
    url: 'https://www.ua32.net/tags.json',
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

