const express = require('express');

const createMessage = require('../controllers/messages/createMessage');
const fetchMessagesById = require('../controllers/messages/fetchMessagesById');
const fetchMessages = require('../controllers/messages/fetchMessages');
const editMessage = require('../controllers/messages/editMessage');
const deleteMessage = require('../controllers/messages/deleteMessage');

const router = express.Router();

router.route('/create').post(createMessage);
router.route('/by-id').post(fetchMessagesById);
router.route('/all').get(fetchMessages);
router.route('/edit').post(editMessage);
router.route('/delete').post(deleteMessage);

module.exports = router;
