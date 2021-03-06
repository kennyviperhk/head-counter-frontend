var fs = require("fs");
var host = "0.0.0.0";
var port = 8080;
var express = require("express");


var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.use(app.router); //use both root and other routes below
app.use(express.static(__dirname + "/../")); //use static files in ROOT/public folder

app.use(express.directory(__dirname + '/../'));

app.get("/", function(request, response){ //root dir
    response.send("Hello!!");
});

app.listen(port, host);