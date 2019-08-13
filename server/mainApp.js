const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

const status = mongoose.connect("mongodb://localhost/sampleProject");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.server = app.listen(port, () => {
  console.log("Server is running");
});

app.get("/", (req, res) => {
  res.send("Beginning of server");
});
