const expressAsyncHandler = require('express-async-handler');
const Message = require('../../model/MessageModel');

const deleteMessage = expressAsyncHandler(async (req, res) => {
    const data = req.body;

    const message = await Message.findOneAndDelete({ id: data.id });

    res.status(200).send(message);
});

module.exports = deleteMessage;
