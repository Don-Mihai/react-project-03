const expressAsyncHandler = require('express-async-handler');
const User = require('../../model/UserModel');

const fetchUsers = expressAsyncHandler(async (req, res) => {
    const users = await User.find();

    res.status(200).send(users);
});

module.exports = fetchUsers;
