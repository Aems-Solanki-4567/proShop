const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
require("./db/mongoose");
const chalk = require("chalk");
// const products = require("./data/products");
const productRouter = require("./router/productRoute");
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Welcome to node server");
});
app.use("/api", productRouter);

app.listen(port, () => {
  console.log(
    chalk.inverse.gray(
      `Server running on port '${process.env.NODE_ENV} Mode'  ${port}`
    )
  );
});
