const expressAsyncHandler = require('express-async-handler');
const Order = require('../../model/OrderModel');

const fetchOrder = expressAsyncHandler(async (req, res) => {
    const { id } = req.body;

    const order = await Order.findOne({ id });

    res.status(200).send(order);
});

module.exports = fetchOrder;
