const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
const Port = 3333;

app.listen(Port, () => {
  console.log(`Serverul ruleaza la portul: ${Port}`);
});
