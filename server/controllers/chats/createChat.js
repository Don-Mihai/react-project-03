const expressAsyncHandler = require('express-async-handler');
const Chat = require('../../model/ChatModel');
const { v4: uuidv4 } = require('uuid');

const createChat = expressAsyncHandler(async (req, res) => {
    const data = req.body;

    const uuid = uuidv4();
    const numericId = parseInt(uuid.replace(/-/g, ''), 16);

    const chat = await Chat.create({ ...data, id: numericId });

    res.status(201).send(chat);
});

module.exports = createChat;
