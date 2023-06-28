const expressAsyncHandler = require('express-async-handler');
const Order = require('../../model/OrderModel');
const { v4: uuidv4 } = require('uuid');

const createOrder = expressAsyncHandler(async (req, res) => {
    const data = req.body;

    const uuid = uuidv4();
    const numericId = parseInt(uuid.replace(/-/g, ''), 16);

    const order = await Order.create({ ...data, id: numericId });

    res.status(201).send(order);
});

module.exports = createOrder;
