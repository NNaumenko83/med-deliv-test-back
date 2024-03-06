const { Order } = require('../models');

class OrderService {
    async addOrder(order) {
        const result = await Order.create(order);
        return;
    }
    async getOrders(query) {
        const emailRegex = new RegExp(query.email, 'i');
        const phoneRegex = new RegExp(query.phone, 'i');

        const orders = await Order.find({
            $or: [
                { email: { $regex: emailRegex } },
                { phone: { $regex: phoneRegex } },
            ],
        }).populate('products.product');

        return orders;
    }

    async getOrderById(id) {
        const order = await Order.findById(id);

        return order;
    }
}

module.exports = new OrderService();
