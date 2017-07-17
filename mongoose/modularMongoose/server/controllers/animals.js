var mongoose = require('mongoose');
var Animal = mongoose.model('Animal')

// Root Request
module.exports = {
    main: function(req, res) {
        Animal.find({}, function(err, results) {
            res.render('index', {animals: results});
        })
    },

    // add animal to db
    create: function(req, res) {
        var animal = new Animal({name: req.body.name, description: req.body.description});
        animal.save(function(err) {
            if(err) {
                console.log('something went wrong');
            } else {
                console.log('successfully added a animal!');
                res.redirect('/');
            }
        })
    },

    // show form to add animal
    form: function(req, res) {
        res.render('new')
    },

    // show the animal
    show: function(req, res) {
        Animal.find({_id: req.params.id}, function(err, result){
            if (err) { console.log(err); }
            res.render('show', {animal: result[0]});
        })
    },

    // show edit page with animal information
    edit: function(req, res) {
        Animal.find({_id: req.params.id}, function(err, result){
            if (err) { console.log(err); }
            res.render('edit', {animal: result[0]});
        })
    },

    // update
    update: function(req, res){
        Animal.update({ _id: req.params.id }, req.body, function(err, result){
            if (err) { console.log(err); }
            res.redirect('/')
        })
    },

    // delete
    delete: function(req, res){
        Animal.remove({ _id: req.params.id }, function(err, result){
            if (err) { console.log(err); }
            res.redirect('/')
        })
    }
}