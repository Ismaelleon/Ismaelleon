const mongoose = require('mongoose');

let workSchema = mongoose.Schema({
    title: String,
    date: String,
    github: String,
    tags: String
});

const Work = mongoose.model('work', workSchema, 'work');

module.exports = Work;
