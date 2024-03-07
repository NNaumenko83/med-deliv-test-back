const { ctrlWrapper } = require('../helpers');
const productService = require('../service/product-service');

const updateStatusProduct = async (req, res) => {
    const data = req.body;
    const { productId } = req.params;
    console.log('productId:', productId);
    const result = await productService.updateStatusProduct(productId, data);

    res.status(200).json({
        status: 'success',
        code: 200,
        data: result,
    });
    if (!result) {
        throw HttpError(404, 'Not found');
    }
};

module.exports = ctrlWrapper(updateStatusProduct);
