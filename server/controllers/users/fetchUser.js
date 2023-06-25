const expressAsyncHandler = require('express-async-handler');
const User = require('../../model/UserModel');

// @desc    Авторизирует пользователя
// @route   POST /api/user/by-id
const fetchUser = expressAsyncHandler(async (req, res) => {
    const { userId } = req.body;

    const user = await User.findOne({ id: userId });

    res.status(200).send(user);
});

module.exports = fetchUser;
