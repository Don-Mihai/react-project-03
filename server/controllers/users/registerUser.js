const expressAsyncHandler = require('express-async-handler');
const User = require('../../model/UserModel');
const jwt = require('jsonwebtoken');

const registerUser = expressAsyncHandler(async (req, res) => {
    const data = req.body;

    const { customAlphabet } = await import('nanoid');
    const generateNumericId = customAlphabet('0123456789', 10);
    const numericId = generateNumericId();

    const existingEmail = User.findOne({ email: data.email });
    const existingLogin = User.findOne({ login: data.login });

    if (existingEmail?.id) {
        res.status(400).send({ message: 'Пользователь с таким email уже существует' });
    }

    if (existingLogin?.id) {
        res.status(400).send({ message: 'Пользователь с таким логином уже существует' });
    }

    const user = await User.create({ ...data, id: numericId });

    const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
        expiresIn: '1h',
    });

    res.status(201).send({ token });
});

module.exports = registerUser;
