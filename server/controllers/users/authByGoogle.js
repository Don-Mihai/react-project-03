const User = require('../../model/UserModel');
const expressAsyncHandler = require('express-async-handler');

const authByGoogle = expressAsyncHandler(async (req, res) => {
    try {
        const { id, email, name } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            //todo: когда сделают jwt-авторизацию, заменить на корректный сервис
            const userData = await User.create({ id, email, name });
            return res.status(200).send(userData);
        }
        return res.status(200).send(user);
    } catch (e) {
        console.error(e);
    }
});

module.exports = authByGoogle;
