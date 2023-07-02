const expressAsyncHandler = require('express-async-handler');
const Message = require('../../model/MessageModel');

const fetchMessagesById = expressAsyncHandler(async (req, res) => {
    const { senderId, recipientId } = req.body;

    const messages = await Message.find({ senderId, recipientId });

    res.status(200).send(messages);
});

module.exports = fetchMessagesById;
