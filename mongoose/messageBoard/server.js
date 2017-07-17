var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// Post Model is the database //
mongoose.connect('mongodb://localhost/message_board');
var Schema = mongoose.Schema;

var PostSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 4},
    message: {type: String, required: true, minlength: 4},
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}
}, {timestamps: true});

mongoose.model("Post", PostSchema);
var Post = mongoose.model("Post");
mongoose.Promise = global.Promise;

// Comment Model
var CommentSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 4},
    _post: {type: Schema.Types.ObjectId, ref: 'Post'},
    comment: {type: String, required: true, minlength: 3},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}
}, {timestamps: true});

mongoose.model("Comment", CommentSchema);
var Comment = mongoose.model('Comment');

// loading all the messages and posts.
app.get('/', function(req, res) {
    Post.find({}).populate('comments').exec(function (err, posts) {
        res.render('index', {posts: posts});
    })
});

// creating a user name and message
app.post('/posts', function(req, res) {
    console.log("POST DATA", req.body);
    var post = new Post(req.body);
    post.name = req.body.name;
    post.message = req.body.message;
    post.save(function (err) {
        if (err){
            console.log('errors', err);
        }
        else {
            res.redirect('/');
        }
    })
});

app.post('/comments/:id', function (req, res) {
    Post.findOne({_id: req.params.id}, function (err, post) {
        var comment = new Comment({name: req.body.name, comment: req.body.comment});
        comment._post = post._id;
        comment.save(function (err) {
            post.comments.push(comment);
            post.save(function (err) {
                if (err){
                    console.log('Error');
                }
                else {
                    res.redirect('/');
                }
            })
        })
    })
});

app.listen(8001, function() {
    console.log("listening on port 8000");
});
