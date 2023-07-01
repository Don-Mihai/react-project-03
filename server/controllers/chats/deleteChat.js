const expressAsyncHandler = require('express-async-handler');
const Chat = require('../../model/ChatModel');

const deleteChat = expressAsyncHandler(async (req, res) => {
    const data = req.body;

    const chat = await Chat.findOneAndDelete({ id: data.id });

    res.status(200).send(chat);
});

module.exports = deleteChat;
