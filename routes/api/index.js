const shopsRouter = require('./shops');
const productsRouter = require('./products');
const ordersRouter = require('./orders');
const couponsRouter = require('./coupons');

module.exports = function routes(app) {
    app.use('/api/shops', shopsRouter);
    app.use('/api/products', productsRouter);
    app.use('/api/orders', ordersRouter);
    app.use('/api/coupons', couponsRouter);
};
