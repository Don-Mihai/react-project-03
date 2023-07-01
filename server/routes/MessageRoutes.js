const express = require('express');

const createMessage = require('../controllers/messages/createMessage');
const fetchMessage = require('../controllers/messages/fetchMessage');
const fetchMessages = require('../controllers/messages/fetchMessages');
const editMessage = require('../controllers/messages/editMessage');
const deleteMessage = require('../controllers/messages/deleteMessage');

const router = express.Router();

router.route('/create').post(createMessage);
router.route('/by-id').post(fetchMessage);
router.route('/all').post(fetchMessages);
router.route('/edit').post(editMessage);
router.route('/delete').post(deleteMessage);

module.exports = router;
