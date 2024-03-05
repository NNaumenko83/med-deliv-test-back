const { ctrlWrapper } = require('../helpers');
const couponsService = require('../service/coupons-service');

const getCoupons = async (req, res) => {
    console.log(couponsService);
    const coupons = await couponsService.getCoupons();

    res.status(200).json(coupons);
};

module.exports = ctrlWrapper(getCoupons);
