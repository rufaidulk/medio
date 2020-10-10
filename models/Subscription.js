const mongoose = require('mongoose');
const Reader = require('./Reader');
const SubscriptionPlan = require('./SubscriptionPlan');

const installmentSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    paidDate: {
        type: Date
    },
    status: {
        type: String
    }
});

const subscriptionSchema = new mongoose.Schema({
    reader: {
        type: Reader.schema,
        required: true
    },
    subscriptionPlan: {
        type: SubscriptionPlan.schema,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    installments: [installmentSchema]
});

const Subscription = mongoose.model('subscription', subscriptionSchema);

module.exports = Subscription;