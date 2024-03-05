const { Schema, model } = require('mongoose');
const { handleMongooseError } = require('../helpers');
const Joi = require('joi');

const phoneRegExp =
    /^\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const orderSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Set name for contact'],
        },

        email: {
            type: String,
            match: emailRegExp,
            required: [true, 'Set email is required'],
        },

        phone: {
            type: String,
            match: phoneRegExp,
            required: [true, 'Set phone is required'],
        },

        address: {
            type: String,
            required: [true, 'Set address for contact'],
        },

        shop: {
            type: Schema.Types.ObjectId,
            ref: 'shops',
            required: [true, 'Shop is required'],
        },

        products: [
            {
                _id: false,
                product: {
                    type: Schema.Types.ObjectId,
                    ref: 'Product',
                    required: [true, 'Product ID is required'],
                },
                quantity: {
                    type: Number,
                    required: [true, 'Quantity is required'],
                },
                orderPrice: {
                    type: Number,
                    required: [true, 'Order price is required'],
                },
            },
        ],
        coupon: {
            type: Schema.Types.ObjectId,
            ref: 'coupons',
        },
        total: {
            type: Number,
            required: [true, 'Total is required'],
        },
        discount: {
            type: Number,
            required: [true, 'Total is required'],
        },
        totalWidthDiscount: {
            type: Number,
            required: [true, 'Total is required'],
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

const addOrderSchema = Joi.object({
    name: Joi.string().required(),
    phone: Joi.string().min(3).max(20).pattern(phoneRegExp).required(),
    email: Joi.string().min(3).max(30).pattern(emailRegExp).required(),
    address: Joi.string().required(),
    shop: Joi.string().required(),
    products: Joi.array()
        .items(
            Joi.object({
                product: Joi.string().required(),
                quantity: Joi.number().integer().min(1).required(),
                orderPrice: Joi.number().required(),
            }),
        )
        .required(),
    coupon: Joi.string().required(),
    total: Joi.number().required(),
    discount: Joi.number().required(),
    totalWidthDiscount: Joi.number().required(),
});

orderSchema.post('save', handleMongooseError);

const Order = model('order', orderSchema);

module.exports = { Order, addOrderSchema };
