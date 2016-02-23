var stormpath = require('express-stormpath');
var morgan = require('morgan');
var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');
var mongoose = require('mongoose');
var app = express();
var compiler = webpack(config);

app.use(morgan('combined'));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/css/bootstrap.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'build/css/bootstrap.min.css'));
});

var dog = [{dog: 'dog'}];
var Instrument = require('./db/models/instrument.js');


app.get('/test', function (req, res) {
    console.log('instrument');
    res.json(dog);
});

app.get('/db', function (req, res){
    Instrument.find({}, function(err, instruments) {
          res.json(instruments);
     });
});

mongoose.connect('mongodb://localhost/test');

stormpath.init(app, {
  website: true,
  web: {
    spaRoot: path.join(__dirname, 'build/index.html')
  }
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

app.on('stormpath.ready', function () {
  console.log('Stormpath Ready');
    
  app.listen(3000, 'localhost', function (err) {
    if (err) {
      console.log(err);
      return;
    }

    console.log('Listening at http://localhost:3000');
  });
});