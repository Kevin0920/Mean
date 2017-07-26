console.log('notes controller');

var mongoose = require('mongoose');
var Note = mongoose.model('Note');

module.exports = {
  create: function(req, res) {
    Note.create(req.body, function(err, output) {
      if (err) {
        res.json({message: "Error", error: err})
      }
      else {
        res.json({message: "Success", notes: output})
      }
    })
  },
  show: function(req, res) {
    Note.show(req. body, function(err, data) {
      if (err) {
        res.json({message: "Error", error : err})
      }
      else {
        console.log("Note is displaying", data);
        res.json({message: "Success showing note", note: data})
      }
    })
  }
}
