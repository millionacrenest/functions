var request = require('request');
const functions = require('firebase-functions');

request('https://ua32.net/node/add', function (error, response, body) {
    if (!error && response.statusCode == 200) {
         console.log('did it');
    }
})
