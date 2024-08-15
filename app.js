const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./src/routes");
const dotenv = require("dotenv");
const path = require("path");
require("./src/config/db");// import database here
const app = express();
dotenv.config({ path: path.join(__dirname, "./.env") });

app.use(cors());
app.options("*", cors()); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/api", routes);

// 404 error request
app.use((req, res, next) => {
    next(new Error("Not found"))
})

module.exports = app;
