var firebase = require("firebase");
const request = require('request');

firebase.initializeApp({
    serviceAccount: "./key.json",
    databaseURL: "https://ua32-a7286.firebaseio.com"
});




var refWeb = firebase.database().ref('website');

const options = {  
    url: 'https://www.ua32.net/app.json',
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

var refPoli = firebase.database().ref('political');
const options2 = {  
    url: 'https://www.ua32.net/political.json',
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8',
        'User-Agent': 'webmaster'
    }
};

request(options2, function(err, res, body) {  
    let json = JSON.parse(body);
    refPoli.set(json);
});


var refRes = firebase.database().ref('resources');
const options3 = {  
    url: 'https://www.ua32.net/resources.json',
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8',
        'User-Agent': 'webmaster'
    }
};

request(options3, function(err, res, body) {  
    let json = JSON.parse(body);
    refRes.set(json);
});

var retRes = firebase.database().ref('retirees');
const options4 = {  
    url: 'https://www.ua32.net/retirees.json',
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8',
        'User-Agent': 'webmaster'
    }
};

request(options4, function(err, res, body) {  
    let json = JSON.parse(body);
    retRes.set(json);
});

var aboutRes = firebase.database().ref('about');
const options5 = {  
    url: 'https://www.ua32.net/about.json',
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8',
        'User-Agent': 'webmaster'
    }
};

request(options5, function(err, res, body) {  
    let json = JSON.parse(body);
    aboutRes.set(json);
});


var staffRes = firebase.database().ref('staff');
const options6 = {  
    url: 'https://www.ua32.net/staff.json',
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8',
        'User-Agent': 'webmaster'
    }
};

request(options6, function(err, res, body) {  
    let json = JSON.parse(body);
    staffRes.set(json);
});

var vidsRes = firebase.database().ref('vids');
const options7 = {  
    url: 'https://www.ua32.net/video.json',
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8',
        'User-Agent': 'webmaster'
    }
};

request(options7, function(err, res, body) {  
    let json = JSON.parse(body);
    vidsRes.set(json);
});


var userRes = firebase.database().ref('users');
const options8 = {  
    url: 'https://www.ua32.net/user.json',
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8',
        'User-Agent': 'webmaster'
    }
};

request(options8, function(err, res, body) {  
    let json = JSON.parse(body);
    userRes.set(json);
});

var frontpageRes = firebase.database().ref('frontpage');
const options9 = {  
    url: 'https://www.ua32.net/frontpage.json',
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8',
        'User-Agent': 'webmaster'
    }
};

request(options9, function(err, res, body) {  
    let json = JSON.parse(body);
    frontpageRes.set(json);
});


    
      
   



