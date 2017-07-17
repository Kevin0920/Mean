var express = require("express");
var path = require("path");
var app  =  express();

app. use(express.static(path. join(__dirname, "./static")));
app.set( 'views', path. join(__dirname,  './views'));
app.set( 'view engine',  'ejs');


app.get( '/', function(req, res) {
    res.render( "index");
});

// global var will be placed with db


var server  = app. listen(8000, function() {
    console. log( "listening on port 8000");
});

var io = require('socket.io').listen(server);
//need to save messages
var messages = ["<p>Chatroom started</p>"];
var user={};
// every user has their own socket id
io.sockets.on('connection', function (socket) {
    console.log('new connection on socket id', socket.id);
    socket.on("got_new_user", function (data) {
        user[socket.id] = data.name;
        console.log(user);
        socket.emit("added_user", {messages: messages});
        var joined = "<p>" + data.name + " has joined!!!" + "</p>";
        messages.push(joined);
        socket.broadcast.emit("update_chat", {message: joined});
    });
    socket.on("new_message", function (data) {
        console.log(data);
        messages.push(data.message);
        io.emit("update_chat", {message: data.message});
    });
    socket.on("disconnection", function () {
        console.log("disconnected from" + user.id);
        delete user[socket.id];
    });

});