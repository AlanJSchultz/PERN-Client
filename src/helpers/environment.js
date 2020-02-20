// jshint esversion:6

let APIURL = '';
if (window.location.hostname == 'localhost' || window.location.hostname == '127.0.0.1') {
    APIURL = 'http://localhost:4000';
} else {
    APIURL = 'https://ajs-bowlinglog-server.herokuapp.com';
}

export default APIURL;
