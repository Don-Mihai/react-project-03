const expressAsyncHandler = require('express-async-handler');
const UserProfile = require('../../model/UserProfileModel');

const fetchUserProfile = expressAsyncHandler(async (req, res) => {
    const { id } = req.body;

    const userProfile = await UserProfile.findOne({ id });

    res.status(200).send(userProfile);
});

module.exports = fetchUserProfile;
