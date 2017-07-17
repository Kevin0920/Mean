var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
    main: function (req, res) {
        User.find({}, function (err, results) {
            res.render('index', {users: results});
        })
    }

    // create a new user validating the name, password, email, birthday
    create: function (req, res) {
        var newUser = new User();
        newUser.first_name = req.body.first_name;
        newUser.last_name  = req.body.last_name;
        newUser.email = req.body.email;
        newUser.password = req.body.password;
        newUser.confirm_pass = req.body.confirm_pass;
        newUser.birthday = req.body.birthday;
        newUser.save(function (err) {
         if (err) {
             console.log('something went wrong', err);
         }
         else {
             console.log('successfully added a new user!');
             res.redirect('/users');
         }
        })
    },

    login: function (req, res) {
        User.findOne({email: req.body.email}, function (err, user) {
            if (err) {
                res.json(err);
            }
            else
        })
    }

}
