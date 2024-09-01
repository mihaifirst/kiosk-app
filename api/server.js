const { getOrderNumber } = require("./helpers/orderNumberHelper");
const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const port = 3333;

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

app.use(cors());

const productRoutes = require("./products/products.routes");

app.get("/api/products", (req, res) => {
  res.sendFile(path.join(__dirname, "./assets/products.json"));
});

app.get("/api/getBundleSettings", (req, res) => {
  res.sendFile(path.join(__dirname, "./assets/getBundleSettings.json"));
});

app.get("/api/orderNumber", (req, res) => {
  res.json({ orderNumber: getOrderNumber() });
});

app.listen(port, () => {
  console.log(`Serverul ruleaza la portul: ${port}`);
});
