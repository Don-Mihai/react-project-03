const expressAsyncHandler = require('express-async-handler');
const Message = require('../../model/MessageModel');

const editMessage = expressAsyncHandler(async (req, res) => {
    const data = req.body;

    const message = await Message.findOneAndUpdate({ id: data.id }, { $set: data }, { returnDocument: 'after' });

    res.status(200).send(message);
});

module.exports = editMessage;
