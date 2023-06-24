const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const conectDb = require('./config/bd');
const Schema = mongoose.Schema;
// const expressAsyncHandler = require('express-async-handler');

const app = express();

const PORT = process.env.PORT || 5000;

conectDb();

// установка схемы
const userScheme = new Schema({
    name: String,
    age: Number,
});

const User = mongoose.model('User', userScheme);

app.post('/create-user', async function (request, response) {
    const data = request.body;

    const user = await User.create(data);
    console.log(data);

    response.send(user).status(200);
});

app.listen(PORT, () => {
    console.log(`сервер запущен по порту ${PORT}`);
});
