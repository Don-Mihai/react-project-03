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
const Profile = require('./model/UserProfileModel');
const cors = require('cors');
const conectDb = require('./config/bd');
const multer = require('multer');
const User = require('./model/UserModel');

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

// Обработчик подключения нового клиента
io.on('connection', socket => {
    // Событие подключения клиента к определенному чату
    socket.on('joinChat', async chatId => {
        console.log(`Client joined chat: ${chatId}`);

        // Присоединение клиента к комнате
        socket.join(chatId);

        // Загрузка и отправка истории сообщений только для этой комнаты
        try {
            const messages = await Message.find({ chatId });
            socket.emit('chatHistory', messages);
        } catch (error) {
            console.error(`Failed to fetch chat history for chat ${chatId}:`, error);
        }
    });

    // Событие отправки сообщения
    socket.on('sendMessage', async data => {
        const { senderId, chatId, content } = data;

        try {
            // Сохранение сообщения в базе данных
            const message = await Message.create({
                senderId,
                chatId,
                content,
            });

            console.log(`New message in chat ${chatId}:`, message);

            // Отправка нового сообщения в комнату получателя
            io.to(chatId).emit('message', message);
        } catch (error) {
            console.error('Failed to save message:', error);
        }
    });

    // Обработчик отключения клиента
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

app.use(express.static('./uploads'));

const storageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

app.post('/uploads', multer({ storage: storageConfig }).single('filedata'), async function (req, res) {
    let filedata = req.file;
    let userId = req.query?.userId;

    const user = await User.findOneAndUpdate({ id: userId }, { $set: { imageUrl: filedata.filename } }, { returnDocument: 'after' });

    if (!filedata) res.send('Ошибка при загрузке файла');
    else res.send(user);
});
