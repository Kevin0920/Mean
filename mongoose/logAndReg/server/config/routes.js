var users = require('../controllers/users.js')

module.exports = function (app) {
    // show user database checking who already in db
    app.get('/', function (req, res) {

    });
    // login an user
    app.post('/users', function (req, res) {
        users.login(req, res)
    })
    // create an user
    app.post('/users', function (req, res) {
        users.create(req, res)
    })
}