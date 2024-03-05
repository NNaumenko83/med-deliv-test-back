const { ctrlWrapper } = require('../helpers');
const couponsService = require('../service/shop-service');

const getCoupons = async (req, res) => {
    const coupons = await couponsService.getCoupons();

    res.status(200).json(shops);
};

module.exports = ctrlWrapper(getCoupons);
