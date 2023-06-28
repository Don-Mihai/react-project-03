const mongoose = require('mongoose');
const { Schema } = mongoose;

// установка схемы
const chatScheme = new Schema(
    {
        id: Number,
        senderId: Number,
        recipientId: Number,
    },
    { versionKey: false }
);

const Chat = mongoose.model('Chat', chatScheme);

module.exports = Chat;
