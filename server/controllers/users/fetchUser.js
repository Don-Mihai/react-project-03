const expressAsyncHandler = require('express-async-handler');
const User = require('../../model/UserModel');
const jwt = require('jsonwebtoken');
const UserProfile = require('../../model/UserProfileModel');

const fetchUser = expressAsyncHandler(async (req, res) => {
    const { id } = req.body;

    let myId = id;

    if (!id) {
        const token = req.headers.authorization?.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY);

        console.log('decodedToken', decodedToken);

        myId = decodedToken.id;
    }

    const user = await User.findOne({ id: Number(myId) });

    res.status(200).send(user);
});

module.exports = fetchUser;
