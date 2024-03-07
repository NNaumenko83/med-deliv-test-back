const { ctrlWrapper } = require('../helpers');
const shopService = require('../service/shop-service');

const getShops = async (req, res) => {
    const shops = await shopService.getShops();

    res.status(200).json(shops);
};

module.exports = ctrlWrapper(getShops);
