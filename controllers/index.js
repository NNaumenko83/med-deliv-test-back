const getShops = require('./getShops');
const getShopById = require('./getShopById');
const getProoductsByShopId = require('./getProoductsByShopId');
const addOrder = require('./addOrder');
const getOrders = require('./getOrders');
const getOrderById = require('./getOrderById');
const getCoupons = require('./getCoupons');
const updateStatusProduct = require('./updateStatusProduct');

module.exports = {
    getShops,
    getProoductsByShopId,
    getShopById,
    addOrder,
    getOrders,
    getCoupons,
    getOrderById,
    updateStatusProduct,
};
