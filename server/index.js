const express = require('express');
require('dotenv').config();
const UserRoutes = require('./routes/UserRoutes');
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

app.listen(PORT, () => {
    console.log(`сервер запущен по порту ${PORT}`);
});
