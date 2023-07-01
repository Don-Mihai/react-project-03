const expressAsyncHandler = require('express-async-handler');
const UserProfile = require('../../model/UserProfileModel');

const editUserProfile = expressAsyncHandler(async (req, res) => {
    const data = req.body;

    const userProfile = await UserProfile.findOneAndUpdate({ id: data.id }, { $set: data }, { returnDocument: 'after' });

    res.status(200).send(userProfile);
});

module.exports = editUserProfile;
