const expressAsyncHandler = require('express-async-handler');
const Message = require('../../model/MessageModel');
const { v4: uuidv4 } = require('uuid');

const createMessage = expressAsyncHandler(async (req, res) => {
    const data = req.body;

    const uuid = uuidv4();
    const numericId = parseInt(uuid.replace(/-/g, ''), 16);

    const message = await Message.create({ ...data, id: numericId });

    res.status(201).send(message);
});

module.exports = createMessage;
