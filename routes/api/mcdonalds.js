const express = require("express");
const ctrl = require("../../controllers/mcdonalds");

const router = express.Router();

router.get("", ctrl.getAll);

module.exports = router;
