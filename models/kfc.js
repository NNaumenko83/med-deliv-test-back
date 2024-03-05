const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const kfcSchema = new Schema(
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

kfcSchema.post("save", handleMongooseError);

const Kfc = model("kfc", kfcSchema);

module.exports = { Kfc };
