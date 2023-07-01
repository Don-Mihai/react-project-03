const express = require('express');

const registerUser = require('../controllers/users/registerUser');
const authUser = require('../controllers/users/authUser');
const fetchUser = require('../controllers/users/fetchUser');
const editUser = require('../controllers/users/editUser');
const deleteUser = require('../controllers/users/deleteUser');

const router = express.Router();

router.route('/register').post(registerUser);
router.route('/auth').post(authUser);
router.route('/by-id').post(fetchUser);
router.route('/edit').post(editUser);
router.route('/delete').post(deleteUser);

module.exports = router;
