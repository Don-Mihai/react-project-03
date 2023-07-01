const express = require('express');

const createChat = require('../controllers/chats/createChat');
const fetchChat = require('../controllers/chats/fetchChat');
const fetchChats = require('../controllers/chats/fetchChats');
const editChat = require('../controllers/chats/editChat');
const deleteChat = require('../controllers/chats/deleteChat');

const router = express.Router();

router.route('/create').post(createChat);
router.route('/by-id').post(fetchChat);
router.route('/all').get(fetchChats);
router.route('/edit').post(editChat);
router.route('/delete').post(deleteChat);

module.exports = router;
