var port = 8000;
var srcDir = 'public';

var express = require('express');
// var angular = require('angular');
var app = express();

app.use(express.static(__dirname + '/' + srcDir));

var ghpages = require('gh-pages');
var path = require('path');

ghpages.publish(srcDir,
  {
    user: {
      name: 'Kevin Qiu',
      email: 'kevinqiu96@gmail.com'
    },
    branch: 'gh-pages',
    repo: 'https://github.com/kevqiu/clean-bw-website.git',
    remote: 'origin'
  },
  function(err) {
    console.log(err);
    console.log("pushed files from " + srcDir + " to gh-pages");
  }
);

app.listen(port);
console.log("Server running on port " + port);
