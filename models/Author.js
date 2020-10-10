const mongoose = require('mongoose');
const User = require('./User');

const authorSchema = new mongoose.Schema({
    user: {
        type: User.schema,
        required: true
    },
    penName: {
        type: String,
        required: true
    }
});

const Author = mongoose.model('author', authorSchema);

module.exports = Author;