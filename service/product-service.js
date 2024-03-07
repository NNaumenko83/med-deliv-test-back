const { Product } = require('../models');

class ProductService {
    async getProductsByShopId(shopId) {
        const products = await Product.find({ shopId }).exec();

        return products;
    }
}

module.exports = new ProductService();
