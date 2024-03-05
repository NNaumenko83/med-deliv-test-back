const { getShops, getShopById } = require('../../controllers');
const isValidId = require('../../middlewares/isValidId');

const Router = require('express').Router;

const router = new Router();

router.get('/', getShops);
router.get('/:shopId', isValidId('shopId'), getShopById);

module.exports = router;
