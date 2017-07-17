var express  =  require( "express");
var path  =  require( "path");


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
// server is inserted into the callback function below
var io  =  require( 'socket.io'). listen(server);

//whenever a connection event happens(the connection event is built in) run the following
io.sockets.on( 'connection', function (socket) {
    console.log(socket.id);

    socket.on('posting_form', function (data) {
        console.log(data);
        var number = Math.floor((Math.random() * 1000) + 1);
        console.log("THIS IS BEING HIT");
        socket.emit('updated_message', {response: data});
        // socket.emit('random_num', {response: number});
    });
})




