// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();


var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "./static")));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render("index");
})
// post route for adding a user
app.post('/result', function(req, res) {

    info = {
        name: req.body.name,
        location: req.body.location,
        language: req.body.language,
        comment: req.body.language
    };

    console.log("POST DATA", req.body);

    res.render("result", {info: req.body});
})
// tell the express app to listen on port 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
});