const { Schema, model } = require('mongoose');
const { handleMongooseError } = require('../helpers');
const Joi = require('joi');

const SchemaProducts = new Schema(
    {
        name: {
            type: String,
            required: [true, ' Name is required'],
        },
        imageURL: {
            type: String,
            required: [true, 'Image is required'],
        },
        price: {
            type: Number,
            required: [true, 'Price is required'],
        },
        currency: {
            type: String,
            required: [true, 'Currency'],
        },
        shop: {
            type: Schema.Types.ObjectId,
            ref: 'shops',
            required: [true, 'Shop is required'],
        },
        favorite: {
            type: Boolean,
            default: false,
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

const updateStatusProductSchema = Joi.object({
    favorite: Joi.boolean().required(),
});

SchemaProducts.post('save', handleMongooseError);

const Product = model('Product', SchemaProducts);

module.exports = { Product, updateStatusProductSchema };
