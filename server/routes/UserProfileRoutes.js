const express = require('express');

const createUserProfile = require('../controllers/userProfiles/createUserProfile');
const fetchUserProfile = require('../controllers/userProfiles/fetchUserProfile');
const fetchUserProfiles = require('../controllers/userProfiles/fetchUserProfiles');
const editUserProfile = require('../controllers/userProfiles/editUserProfile');
const deleteUserProfile = require('../controllers/userProfiles/deleteUserProfile');

const router = express.Router();

router.route('/create').post(createUserProfile);
router.route('/by-id').post(fetchUserProfile);
router.route('/all').get(fetchUserProfiles);
router.route('/edit').post(editUserProfile);
router.route('/delete').post(deleteUserProfile);

module.exports = router;
