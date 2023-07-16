const mongoose = require('mongoose');
const { Schema } = mongoose;
const shortid = require('shortid');

// установка схемы
const userScheme = new Schema(
    {
        id: Number,
        name: String,
        surname: String,
        login: String,
        password: String,
        email: String,
        role: String,
        imageUrl: String,
        skills: [String],
        ratePerHour: Number,
        rating: Number,
        ratingCount: Number,
    },
    { versionKey: false }
);

const User = mongoose.model('User', userScheme);

module.exports = User;
