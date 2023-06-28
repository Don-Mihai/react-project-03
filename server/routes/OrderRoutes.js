const express = require('express');

const createOrder = require('../controllers/orders/createOrder');
const fetchOrder = require('../controllers/orders/fetchOrder');
const fetchOrders = require('../controllers/orders/fetchOrders');
const editOrder = require('../controllers/orders/editOrder');
const deleteOrder = require('../controllers/orders/deleteOrder');

const router = express.Router();

router.route('/create').post(createOrder);
router.route('/by-id').post(fetchOrder);
router.route('/all').post(fetchOrders);
router.route('/edit').post(editOrder);
router.route('/delete').post(deleteOrder);

module.exports = router;
