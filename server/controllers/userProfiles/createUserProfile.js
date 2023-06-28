const expressAsyncHandler = require('express-async-handler');
const UserProfile = require('../../model/UserProfileModel');
const { v4: uuidv4 } = require('uuid');

const createUserProfile = expressAsyncHandler(async (req, res) => {
    const data = req.body;

    const uuid = uuidv4();
    const numericId = parseInt(uuid.replace(/-/g, ''), 16);

    const userProfile = await UserProfile.create({ ...data, id: numericId });

    res.status(201).send(userProfile);
});

module.exports = createUserProfile;
