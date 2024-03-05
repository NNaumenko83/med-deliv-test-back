const { HttpError, ctrlWrapper } = require("../helpers");
const { Kfc } = require("../models/kfc");

const getAll = async (_, res) => {
  const result = await Kfc.find();

  console.log("result:", result);

  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json({ status: "success", code: 200, data: result });
};

module.exports = {
  getAll: ctrlWrapper(getAll),
};
