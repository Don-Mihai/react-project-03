const expressAsyncHandler = require('express-async-handler');
const User = require('../../model/UserModel');

const fetchUser = expressAsyncHandler(async (req, res) => {
    const { id } = req.body;

    const user = await User.findOne({ id });

    res.status(200).send(user);
});

module.exports = fetchUser;
