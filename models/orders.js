const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");
const Joi = require("joi");

const orderSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },

    email: {
      type: String,
      required: [true, "Set email for contact"],
    },

    phone: {
      type: String,
      required: [true, "Set phone for contact"],
    },

    adress: {
      type: String,
      required: [true, "Set adress for contact"],
    },

    shop: {
      type: String,
      required: [true, "Shop not found"],
    },

    products: {
      type: Array,
      required: [true, "Products not found"],
    },
  },
  { versionKey: false, timestamps: true }
);

const addOrderSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  adress: Joi.string().required(),
  shop: Joi.string().required(),
  products: Joi.array().required(),
});

orderSchema.post("save", handleMongooseError);

const Order = model("order", orderSchema);

module.exports = { Order, addOrderSchema };
