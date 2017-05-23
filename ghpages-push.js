var ghpages = require('gh-pages');
var path = require('path');
var fs = require('fs');

var srcDir = 'public';

fs.rename(__dirname + '/public/index.html', __dirname + '/public/404.html', function(err) {
  if (err) console.log('ERROR: ' + err);
  else console.log('renamed to 404.html successfully');
});

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
    if (err) console.log('ERROR: ' + err);
    else {
      console.log("pushed files from " + srcDir + " to gh-pages");
      fs.rename(__dirname + '/public/404.html', __dirname + '/public/index.html', function(err) {
        if (err) console.log('ERROR: ' + err);
        else console.log('renamed to index.html successfully');
      });
    }
  }
);
