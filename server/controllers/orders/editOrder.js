const expressAsyncHandler = require('express-async-handler');
const Order = require('../../model/OrderModel');

const editOrder = expressAsyncHandler(async (req, res) => {
    const data = req.body;

    const order = await Order.findOneAndUpdate({ id: data.id }, { $set: data }, { returnDocument: 'after' });

    res.status(200).send(order);
});

module.exports = editOrder;
