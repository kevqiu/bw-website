var port = 8000;

var express = require('express');
// var angular = require('angular');
var app = express();

app.use(express.static(__dirname + "/public"));

app.listen(port);
console.log("Server running on port " + port);
