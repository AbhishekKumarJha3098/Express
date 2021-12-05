const express = require("express");

const productController = require("productcontroller.js");


const app = express();



app.use("/products/", productsController);


module.exports = app;