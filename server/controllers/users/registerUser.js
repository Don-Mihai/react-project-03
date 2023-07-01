const expressAsyncHandler = require('express-async-handler');
const User = require('../../model/UserModel');
const { v4: uuidv4 } = require('uuid');

// @desc    Регистрирует пользователя
// @route   GET /api/user/register
const registerUser = expressAsyncHandler(async (req, res) => {
    const data = req.body;

    const uuid = uuidv4();
    const numericId = parseInt(uuid.replace(/-/g, ''), 16);

    const user = await User.create({ ...data, id: numericId });

    res.status(201).send(user);
});

module.exports = registerUser;
