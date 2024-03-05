const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const mcdonaldsSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    image: {
      type: String,
    },
    price: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

mcdonaldsSchema.post("save", handleMongooseError);

const Mcdonalds = model("mcdonald", mcdonaldsSchema);

module.exports = { Mcdonalds };
