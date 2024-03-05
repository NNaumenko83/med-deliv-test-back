const { HttpError, ctrlWrapper } = require("../helpers");
const { Murakami } = require("../models/murakami");

const getAll = async (_, res) => {
  const result = await Murakami.find();
  console.log("result:", result);

  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json({ status: "success", code: 200, data: result });
};

module.exports = {
  getAll: ctrlWrapper(getAll),
};
