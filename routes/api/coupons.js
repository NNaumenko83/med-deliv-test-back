const { getCoupons } = require('../../controllers');

const Router = require('express').Router;

const router = new Router();

router.get('/', getCoupons);

module.exports = router;
