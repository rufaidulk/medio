const mongoose = require('mongoose');
const Subscription = require('./Subscription');
const User = require('./User');

const readerSchema = new mongoose.Schema({
    user: {
        type: User.schema,
        required: true
    },
    subscription: {
        type: Subscription.schema,
    }
});

const Reader  = mongoose.model('reader', readerSchema);

module.exports = Reader;