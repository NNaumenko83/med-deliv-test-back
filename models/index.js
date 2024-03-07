const Shop = require('./shop-model');
const { Product, updateStatusProductSchema } = require('./product-model');
const { Order, addOrderSchema } = require('./order-model');
const Coupon = require('./coupon-model');

module.exports = {
    Shop,
    Product,
    Order,
    addOrderSchema,
    Coupon,
    updateStatusProductSchema,
};
