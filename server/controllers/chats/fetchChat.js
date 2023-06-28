const expressAsyncHandler = require('express-async-handler');
const Chat = require('../../model/ChatModel');

const fetchChat = expressAsyncHandler(async (req, res) => {
    const { id } = req.body;

    const chat = await Chat.findOne({ id });

    res.status(200).send(chat);
});

module.exports = fetchChat;
