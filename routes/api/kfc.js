const express = require("express");

const ctrl = require("../../controllers/kfc");

const router = express.Router();

router.get("", ctrl.getAll);

module.exports = router;
