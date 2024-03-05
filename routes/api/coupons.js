const { getCoupons } = require('../../controllers');

const Router = require('express').Router;

const router = new Router();

router.post('/', getCoupons);

module.exports = router;
