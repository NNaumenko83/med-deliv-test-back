const { Product } = require('../models');

class ProductService {
    async getProductsByShopId(shopId, sortBy) {
        console.log('sortBy:', sortBy);
        let sortCriteria = {};

        sortCriteria.favorite = -1;

        if (sortBy && sortBy.includes('date')) {
            sortCriteria.updatedAt = -1;
        }

        if (sortBy && sortBy.includes('price')) {
            sortCriteria.price = 1;
        }

        console.log('sortCriteria:', sortCriteria);
        const products = await Product.find({ shopId })
            .sort(sortCriteria)
            .exec();
        return products;
    }
    async updateStatusProduct(shopId, data) {
        const result = await Product.findByIdAndUpdate(shopId, data, {
            new: true,
        });
        return result;
    }
}

module.exports = new ProductService();
