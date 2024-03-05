const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const kfcRouter = require("./routes/api/kfc");
const mcdonaldsRouter = require("./routes/api/mcdonalds");
const murakamiRouter = require("./routes/api/murakami");
const ordersRouter = require("./routes/api/orders");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/shops/kfc", kfcRouter);
app.use("/api/shops/mcdonalds", mcdonaldsRouter);
app.use("/api/shops/murakami", murakamiRouter);
app.use("/api", ordersRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;

// MongoDB
// Login: Mykola
// Password: PqtUu0YpDiqVQY86
