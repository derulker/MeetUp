var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var config = require('./config.js');
var MONGO_URI = config.mongo.uri;
var path = require('path');
var port = process.env.PORT || 3000;
var event = require('./routes/event');
var bodyParser = require('body-parser');
global.database = null;

app.engine('html', require('ejs').__express);
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname));

MongoClient.connect(MONGO_URI, function(err, db) {
  if (err) return console.log(err)
  makeCollection(db);

  // Start listening for requests
  app.listen(port, function () {
    console.log('Listening on port ' + port);
  });
});

var makeCollection = function(db) {
    database = db;
    database.createCollection('calendars');
}

app.get('/', function (req, res) {
  res.render('eventCreation');
});

app.use('/', event);
app.use('/event', event);

module.exports = app;