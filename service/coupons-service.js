const { Coupon } = require('../models');

class CouponService {
    async getCoupons() {
        const coupons = await Coupon.find();
        return coupons;
    }
}

module.exports = new CouponService();
