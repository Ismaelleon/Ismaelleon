const mongoose = require('mongoose');

let messageSchema = mongoose.Schema({
    name: String,
    email: String,
    message: String
});

const Message = mongoose.model('message', messageSchema, 'messages');

module.exports = Message;
