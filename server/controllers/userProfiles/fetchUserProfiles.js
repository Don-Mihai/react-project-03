const expressAsyncHandler = require('express-async-handler');
const UserProfile = require('../../model/UserProfileModel');

const fetchUserProfiles = expressAsyncHandler(async (req, res) => {
    const userProfiles = await UserProfile.find();

    res.status(200).send(userProfiles);
});

module.exports = fetchUserProfiles;
