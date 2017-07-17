var animals = require('../controllers/animals.js');

module.exports = function (app) {
    app.get('/', function (req, res) {
        // res.render('index')
        animals.showAll(req, res)
    })
    //add animal to db
    app.post('/add', function (req, res) {
        animals.create(req, res)
    })
    app.get('/mongoose/new', function (req, res) {
        res.render('new')
    })
    app.post('/mongoose/show', function (req, res) {
        animals.show(req, res)
    })
    app.get('/mongoose/edit/:id', function (req, res) {
        animals.edit(req, res)
    })
}