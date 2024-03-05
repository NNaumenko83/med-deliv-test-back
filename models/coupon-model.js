const { Schema, model } = require('mongoose');
const { handleMongooseError } = require('../helpers');

const SchemaCoupons = new Schema(
    {
        discount: {
            type: Number,
            required: [true, 'Discount is required'],
        },
    },
    {
        versionKey: false,
        timestamps: true,
        id: true,
        toJSON: {
            transform(doc, ret) {
                ret.id = ret._id;
                delete ret._id;
            },
        },
    },
);

SchemaCoupons.post('save', handleMongooseError);

const Coupon = model('Coupon', SchemaCoupons);

module.exports = Coupon;
