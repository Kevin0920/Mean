var mongoose = require('mongoose');
// create the schema
var UserSchema = new mongoose.Schema({
    first_name: {type: String, required: [true, 'Your first name is too short!'], minlength: 2, trim: true},
    last_name: {type: String, required: [true, 'Your first name is too short!'], minlength: 2, trim: true},
    email: {
        type: String,
        lowercase: true,
        required: [true, 'Please fill out the email1 '],
        minlength: 8
    },
    password: {
        type: String,
        required: true,
        maxlength: 32,
        minlength: 6,
        validate: {
            validator: function( value ) {
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
            },
            message: "Password failed validation, you must have at least 1 number, uppercase and special character"
        }
    },
    birthday: {
        type: Date,
        required: true,
        validator: function ( value ) {
            return value < Date.now();
        }
    }
}, {
    timestamps: {
        createdAt: ' created_at',
        updatedAt: 'updated_at'
    }
});
// the functions allows a user object to check, compare passwords, and encrypt them.