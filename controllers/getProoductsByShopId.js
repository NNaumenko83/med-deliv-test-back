const { ctrlWrapper } = require('../helpers');
const productService = require('../service/product-service');

const getProductsByShopId = async (req, res) => {
    const { shopId } = req.params;
    const { sortBy } = req.query;

    const products = await productService.getProductsByShopId(shopId, sortBy);

    if (products.length === 0) {
        return res.status(404).json({ message: 'Products not found' });
    }

    res.status(200).json(products);
};

module.exports = ctrlWrapper(getProductsByShopId);
