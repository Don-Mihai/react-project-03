const expressAsyncHandler = require('express-async-handler');
const Order = require('../../model/OrderModel');

const fetchOrders = expressAsyncHandler(async (req, res) => {
    const orders = await Order.find();

    res.status(200).send(orders);
});

module.exports = fetchOrders;
