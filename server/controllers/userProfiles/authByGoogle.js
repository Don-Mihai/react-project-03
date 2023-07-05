const UserProfile = require('../../model/UserProfileModel');
const expressAsyncHandler = require('express-async-handler');

const authByGoogle = expressAsyncHandler(async (req, res) => {
    try {
        const { userId, imageUrl } = req.body;
        const userProfile = await UserProfile.findOne({ userId });
        if (!userProfile) {
            const userProfileData = await UserProfile.create({ userId, imageUrl });
            return res.status(200).send(userProfileData);
        } else {
            return res.status(200).send(userProfile);
        }
    } catch (e) {
        console.error(e);
    }
});

module.exports = authByGoogle;
