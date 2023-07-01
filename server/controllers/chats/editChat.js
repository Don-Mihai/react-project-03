const expressAsyncHandler = require('express-async-handler');
const Chat = require('../../model/ChatModel');

const editChat = expressAsyncHandler(async (req, res) => {
    const data = req.body;

    const chat = await Chat.findOneAndUpdate({ id: data.id }, { $set: data }, { returnDocument: 'after' });

    res.status(200).send(chat);
});

module.exports = editChat;
