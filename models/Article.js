const mongoose = require('mongoose');
const Author = require('./Author');

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    author: {
        type: Author.schema,
        required: true
    },
    tags: [String]
});

const Article = mongoose.model('article', articleSchema);

module.exports = Article;