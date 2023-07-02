const expressAsyncHandler = require('express-async-handler');
const Message = require('../../model/MessageModel');

const fetchMessagesById = expressAsyncHandler(async (req, res) => {
    const { senderId, recipientId } = req.body;

    const messages = await Message.find({ senderId, recipientId });
    const messagesElse = await Message.find({ senderId: recipientId, recipientId: senderId });
    const allMessages = [...messages, ...messagesElse];

    const sortedMessages = allMessages.sort((a, b) => a.dateTime - b.dateTime);

    res.status(200).send(sortedMessages);
});

module.exports = fetchMessagesById;
