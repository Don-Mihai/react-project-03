const expressAsyncHandler = require('express-async-handler');
const User = require('../../model/UserModel');

// @desc    Авторизирует пользователя
// @route   POST /api/user/auth
const authUser = expressAsyncHandler(async (req, res) => {
    const data = req.body;

    const user = await User.findOne({ login: data.login, password: data.password });

    console.log(user);

    res.status(200).send(user);
});

module.exports = authUser;
