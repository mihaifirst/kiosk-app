const { getOrderNumber } = require("./helpers/orderNumberHelper");
const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const port = 3333;

app.use(cors());

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
