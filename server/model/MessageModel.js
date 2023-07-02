const mongoose = require('mongoose');
const { Schema } = mongoose;

// установка схемы
const messageScheme = new Schema(
    {
        id: Number,
        senderId: Number,
        recipientId: Number,
        // chatId: Number,
        dateTime: { type: Date, default: Date.now },
        content: String,
    },
    { versionKey: false }
);

const Message = mongoose.model('Message', messageScheme);

module.exports = Message;
