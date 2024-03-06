const { ctrlWrapper } = require('../helpers');
const shopService = require('../service/shop-service');

const getShopById = async (req, res) => {
    const { shopId } = req.params;
    const shop = await shopService.getShopById(shopId);

    res.status(200).json(shop);
};

module.exports = ctrlWrapper(getShopById);
