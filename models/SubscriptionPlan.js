const mongoose = require('mongoose');

const subscriptionPlanSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    amount: {
        type: Number,
        required: true
    },
    isInstallment: {
        type: Boolean,
        required: true
    },
    numOfInstallments: {
        type: Number
    },
    amountPerInstallment: {
        type: Number
    },
    installmentPeriodInDays: {
        type: Number
    }
});

const SubscriptionPlan = mongoose.model('subscription_plan', subscriptionPlanSchema);

module.exports = SubscriptionPlan;