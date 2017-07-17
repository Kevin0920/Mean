// require express
var express = require("express");
var session = require('express-session');

var path = require("path");

var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({secret: 'codingdojorocks'}));

app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    req.session.user += 1;
    var count = req.session.user;
    res.render("index", {counter: count});
});



app.listen(8000, function() {

});
