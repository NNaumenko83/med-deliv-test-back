const { ctrlWrapper } = require('../helpers');
const orderService = require('../service/order-service');

const getOrderById = async (req, res) => {
    const { orderId } = req.params;
    const order = await orderService.getOrderById(orderId);

    res.status(200).json(order);
};

module.exports = ctrlWrapper(getOrderById);
