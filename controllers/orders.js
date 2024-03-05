const { HttpError, ctrlWrapper } = require("../helpers");
const { Order } = require("../models/orders");

const addOrder = async (req, res) => {
  console.log("reqBody:", req.body);
  const result = await Order.create({ ...req.body });
  console.log("result:", result);

  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.status(201).json({ status: "success", code: 201, data: result });
};

module.exports = {
  addOrder: ctrlWrapper(addOrder),
};
