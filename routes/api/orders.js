const express = require("express");
const ctrl = require("../../controllers/orders");
const { validateBody } = require("../../middlewares");
const { addOrderSchema } = require("../../models/orders");

const router = express.Router();

router.post("/orders", validateBody(addOrderSchema), ctrl.addOrder);

module.exports = router;
