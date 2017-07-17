var animals = require('../controllers/animals.js')
// Root Request
module.exports = function(app) {
    app.get('/', function(req, res) {
        // res.render('index')
        animals.main(req, res)
    })

    // add animal to db
    app.post('/add', function(req, res) {
        animals.create(req, res)
    })

    // show form to add animal
    app.get('/mongoose/new', function(req, res) {
        res.render('new')
    })

    // show the animal
    app.get('/:id', function(req, res) {
        // res.render('show')
        animals.show(req, res)
    })

    // show edit page with animal information
    app.get('/:id/edit', function(req, res) {
        // res.render('edit')
        animals.edit(req, res)
    })

    // update
    app.post('/:id', function(req, res){
        animals.update(req, res)
    })

    // delete
    app.post('/:id/delete', function(req, res){
        animals.delete(req, res)
    })
}

