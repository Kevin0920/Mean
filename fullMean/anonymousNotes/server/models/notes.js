console.log('notes model');
// reuqire mongoose
var mongoose = require('mongoose');
// create schema
var NoteSchema = new mongoose.Schema({
  note: {type: String, required: true, minlength: 3}
}, {timestamps: true});

mongoose.model('Note', NoteSchema);
