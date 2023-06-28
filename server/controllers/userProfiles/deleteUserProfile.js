const expressAsyncHandler = require('express-async-handler');
const UserProfile = require('../../model/UserProfileModel');

const deleteUserProfile = expressAsyncHandler(async (req, res) => {
    const data = req.body;

    const userProfile = await UserProfile.findOneAndDelete({ id: data.id });

    res.status(200).send(userProfile);
});

module.exports = deleteUserProfile;
