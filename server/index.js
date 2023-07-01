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

app.listen(PORT, () => {
    console.log(`сервер запущен по порту ${PORT}`);
});
