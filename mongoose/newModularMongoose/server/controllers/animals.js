var mongoose = require('mongoose');
var Animal = moggose.model('Animal');

module.exports = {
    showAll: function (req, res) {
        Animal.find({}, function (err, results) {
            res.render('index', results);
        })

    },
    create: function (req, res) {
        var animal = new Animal({name: req.body.name, description: req.body.description});
        animal.save(function(err) {
            if (err) {
                console.log('something went wrong');
            }
            else {
                console.log('successfully added a new animal')
                res.render('/');
            }
        })
    },
    new: function (req, res) {
        res.render('/');
    }
    show: function (req, res) {
        Animal.find({_id: req.params.id}, function (err, result) {
            if(err){
                console.log(err);
            }
            else{
                res.render('edit', {animal: result[0]});
            }
        })
    }

}