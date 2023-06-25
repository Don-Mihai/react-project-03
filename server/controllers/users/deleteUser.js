const expressAsyncHandler = require('express-async-handler');
const User = require('../../model/UserModel');

// @desc    Удаляет пользователя
// @route   POST /api/user/delete
const deleteUser = expressAsyncHandler(async (req, res) => {
    const data = req.body;

    const user = await User.findOneAndDelete({ id: data.id });

    res.status(200).send(user);
});

module.exports = deleteUser;
