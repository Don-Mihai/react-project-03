const expressAsyncHandler = require('express-async-handler');
const Chat = require('../../model/ChatModel');

const fetchChats = expressAsyncHandler(async (req, res) => {
    const chats = await Chat.find();

    res.status(200).send(chats);
});

module.exports = fetchChats;
