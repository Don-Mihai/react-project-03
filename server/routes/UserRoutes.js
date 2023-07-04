const express = require('express');

const registerUser = require('../controllers/users/registerUser');
const authUser = require('../controllers/users/authUser');
const fetchUser = require('../controllers/users/fetchUser');
const fetchUsers = require('../controllers/users/fetchUsers');
const editUser = require('../controllers/users/editUser');
const deleteUser = require('../controllers/users/deleteUser');
const authByGoogle = require('../controllers/users/authByGoogle');

const router = express.Router();

router.route('/register').post(registerUser);
router.route('/auth').post(authUser);
router.route('/by-id').post(fetchUser);
router.route('/all').post(fetchUsers);
router.route('/edit').post(editUser);
router.route('/delete').post(deleteUser);
router.route('/oauth').post(authByGoogle);

module.exports = router;
