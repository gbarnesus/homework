var express = require('express'),
    app = express(),
    MongoClient = require('mongodb').MongoClient,
    assert = require('assert'),
    ObjectId = require('mongodb').ObjectID,
    url = 'mongodb://localhost:27017/video';

app.set("view engine", "jade");
app.set("views", __dirname + "/templates");


MongoClient.connect(url, function(err, db){
  assert.equal(null, err);

  app.get('/', function(req, res){

       db.collection('movies').find({}).toArray(function(err, docs) {
           res.render('index', { 'movies': docs } );
       });//end db.collection
});//end apt.get
app.get('/ADD', function(req, res){
  res.render('add');

});//end apt.get
app.post('/postMovie', function(req, res, next){
  var movie = req.body.title;
  res.send(movie);

});
var server = app.listen('3000', function(){
  var port = server.address().port;
  console.log("App is running on port %s", port);
})//end app.listen
});//end MongoClient
