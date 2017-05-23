var port = 8000;
var srcDir = 'public';

var express = require('express');
// var angular = require('angular');
var app = express();

app.use(express.static(__dirname + '/' + srcDir));

app.listen(port);
console.log("Server running on port " + port);
