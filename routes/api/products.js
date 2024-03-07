const {
    getProoductsByShopId,
    updateStatusProduct,
} = require('../../controllers');
const { validateBody, isValidId } = require('../../middlewares');
const { updateStatusProductSchema } = require('../../models');

const Router = require('express').Router;

const router = new Router();

router.get('/by-shop/:shopId', getProoductsByShopId);

router.patch(
    '/:productId/favorite',
    isValidId('productId'),
    validateBody(updateStatusProductSchema),
    updateStatusProduct,
);

module.exports = router;
