var express = require('express');
var bodyParser = require('body-parser');


var app = express();
var axios = require('axios');
var request = require('request');

app.use(bodyParser.json());


app.listen(3000, function () {
    console.log('listening on port 3000!');
});

module.exports = app;