const expressAsyncHandler = require('express-async-handler');
const Message = require('../../model/MessageModel');

const fetchMessage = expressAsyncHandler(async (req, res) => {
    const { id } = req.body;

    const message = await Message.findOne({ id });

    res.status(200).send(message);
});

module.exports = fetchMessage;
