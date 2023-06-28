const mongoose = require('mongoose');
const { Schema } = mongoose;

// установка схемы
const orderScheme = new Schema(
    {
        id: Number,
        userId: Number,
        projectId: Number,

        price: Number,
        status: String,
        rating: String,
    },
    { versionKey: false }
);

const Order = mongoose.model('Order', orderScheme);

module.exports = Order;
