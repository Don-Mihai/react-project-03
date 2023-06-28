const mongoose = require('mongoose');
const { Schema } = mongoose;

// установка схемы
const userProfileScheme = new Schema(
    {
        id: Number,
        userId: Number,

        imageUrl: String,

        skills: [String],
        ratePerHour: Number,
        rating: Number,
        ratingCount: Number,
    },
    { versionKey: false }
);

const UserProfile = mongoose.model('UserProfile', userProfileScheme);

module.exports = UserProfile;
