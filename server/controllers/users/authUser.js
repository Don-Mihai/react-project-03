const expressAsyncHandler = require('express-async-handler');
const User = require('../../model/UserModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// @desc    Авторизирует пользователя
// @route   POST /api/user/auth
const authUser = expressAsyncHandler(async (req, res) => {
    const data = req.body;

    const user = await User.findOne({ login: data.login });

    if (!user?.id) {
        res.status(400).send({ errorMessage: 'Неправильный логин' });
    }

    const isPasswordValid = await bcrypt.compare(data.password, user?.password);

    if (!isPasswordValid) {
        return res.status(401).send({ errorMessage: 'Неправильный пароль' });
    }

    const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
        expiresIn: '1h',
    });

    res.status(200).send({ token });
});

module.exports = authUser;
