var notes = require('./../controllers/notesController.js');
const path = require('path')
module.exports = function(app){
    app.post('/create', function(req, res) {
        notes.create(req, res);
    });

    app.get('/show', notes.show);
    app.all("*", (req,res,next) => {
        res.sendfile(path.resolve("./public/dist/index.html"))
    });
}
