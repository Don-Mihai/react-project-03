const express = require('express');
require('dotenv').config();
const UserRoutes = require('./routes/UserRoutes');
const ProjectRoutes = require('./routes/ProjectRoutes');
const ProposalRoutes = require('./routes/ProposalRoutes');
const ChatRoutes = require('./routes/ChatRoutes');
const MessageRoutes = require('./routes/MessageRoutes');
const OrderRoutes = require('./routes/OrderRoutes');
const UserProfileRoutes = require('./routes/UserProfileRoutes');
const bodyParser = require('body-parser');
const socket = require('socket.io');
const Message = require('./model/MessageModel');
const cors = require('cors');
const conectDb = require('./config/bd');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.PORT_SERVER || 5000;

conectDb();

app.use('/user', UserRoutes);
app.use('/project', ProjectRoutes);
app.use('/proposal', ProposalRoutes);
app.use('/chat', ChatRoutes);
app.use('/message', MessageRoutes);
app.use('/order', OrderRoutes);
app.use('/user-profile', UserProfileRoutes);

const server = app.listen(PORT, () => {
    console.log(`сервер запущен по порту ${PORT}`);
});

const io = socket(server, {
    cors: {
        origin: '*',
    },
});

// todo: создание комнат(чатов для разных пользователей)
// Хранение информации о пользователях и комнатах
const users = [];

// Обработчик подключения нового клиента
io.on('connection', socket => {
    console.log(`Клиент подключен: ${socket.id}`);

    // Обработчик для идентификации пользователя
    socket.on('login', userId => {
        // Сохранение информации о пользователе
        users.push({ socketId: socket.id, userId });

        // Присоединение пользователя к комнате с его ID
        socket.join(userId);
    });

    // Обработчик для отправки и сохранения сообщений
    socket.on('chat message', async data => {
        const { senderId, recipientId, content } = data;

        try {
            // Сохранение сообщения в базе данных
            const message = await Message.create({
                senderId,
                recipientId,
                content,
            });

            // Отправка нового сообщения в комнату получателя
            io.to(recipientId).emit('chat message', message);
        } catch (error) {
            console.error('Ошибка сохранения сообщения:', error);
        }
    });

    // Обработчик отключения клиента
    socket.on('disconnect', () => {
        console.log(`Клиент отключен: ${socket.id}`);

        // Удаление информации о пользователе
        // users.(socket.id);
    });
});
