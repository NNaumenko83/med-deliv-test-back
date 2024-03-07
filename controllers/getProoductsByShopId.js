const { ctrlWrapper } = require('../helpers');
const productService = require('../service/product-service');

const getProductsByShopId = async (req, res) => {
    const { shopId } = req.params;

    const products = await productService.getProductsByShopId(shopId);

    res.status(200).json(products);
};

module.exports = ctrlWrapper(getProductsByShopId);
