const expressAsyncHandler = require('express-async-handler');
const User = require('../../model/UserModel');

const registerUser = expressAsyncHandler(async (req, res) => {
    const data = req.body;

    const { customAlphabet } = await import('nanoid');

    const generateNumericId = customAlphabet('0123456789', 10);

    const numericId = generateNumericId();

    const user = await User.create({ ...data, id: numericId });

    res.status(201).send(user);
});

module.exports = registerUser;
