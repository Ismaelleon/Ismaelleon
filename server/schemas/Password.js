const mongoose = require('mongoose');

let passwordSchema = mongoose.Schema({
    password: String
});

const Password = mongoose.model('password', passwordSchema, 'password');

module.exports = Password;
