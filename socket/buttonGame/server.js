var express = require("express");
var path = require("path");
var app  =  express();

app. use(express.static(path. join(__dirname  +  "./static")));
app.set( 'views', path. join(__dirname,  './views'));
app.set( 'view engine',  'ejs');


app.get( '/', function(req, res) {
    res. render( "index");
});


var server  = app. listen(8000, function() {
    console. log( "listening on port 8000");
});

var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
    console.log(socket.id);

    var counter = 0;

    socket.on("btn_counter_clicked", function () {
        counter = counter + 1;
        socket.emit('count_incremented', {count: counter});
    });
    socket.on("reset_button", function () {
        counter = 0;

        io.sockets.emit("reset_count", {count: counter});
    })
});