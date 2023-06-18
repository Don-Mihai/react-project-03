const express = require('express');

const app = express();

const PORT = 5000;

app.get('/users', function (request, response) {
    // отправляем ответ
    response.send(['user1', 'user2', 'user3']);
});

app.listen(PORT, () => {
    console.log(`сервер запущен по порту ${PORT}`);
});
