const expressAsyncHandler = require('express-async-handler');
const Message = require('../../model/MessageModel');

const fetchMessages = expressAsyncHandler(async (req, res) => {
    const messages = await Message.find();

    res.status(200).send(messages);
});

module.exports = fetchMessages;
