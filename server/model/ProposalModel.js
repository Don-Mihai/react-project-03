const mongoose = require('mongoose');
const { Schema } = mongoose;

// установка схемы
const proposalScheme = new Schema(
    {
        id: Number,
        userId: Number,

        title: String,
        description: String,
        price: Number,
        status: String,
    },
    { versionKey: false }
);

const Proposal = mongoose.model('Proposal', proposalScheme);

module.exports = Proposal;
