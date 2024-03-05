const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const murakamiSchema = new Schema(
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

murakamiSchema.post("save", handleMongooseError);

const Murakami = model("murakami", murakamiSchema);

module.exports = { Murakami };
