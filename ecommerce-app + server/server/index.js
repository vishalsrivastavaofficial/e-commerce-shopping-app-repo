var express = require("express");
var cors = require("cors");
var app = express();

//Serves all the request which includes /images in the url from Images folder
app.use("/static", express.static(__dirname + "/static"));
app.use(cors());

var server = app.listen(5001);
console.log("static server at 5001");
