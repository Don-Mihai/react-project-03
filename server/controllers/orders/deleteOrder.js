const expressAsyncHandler = require('express-async-handler');
const Order = require('../../model/OrderModel');

const deleteOrder = expressAsyncHandler(async (req, res) => {
    const data = req.body;

    const order = await Order.findOneAndDelete({ id: data.id });

    res.status(200).send(order);
});

module.exports = deleteOrder;
