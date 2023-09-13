const express = require("express");
const app = express();
require("dotenv").config();
var cors = require("cors");

var db = require("./config/connect");
db.connect();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

const locationRoute = require("./api/routes/location.route");

app.use("/v1/api/location", locationRoute);

app.listen(process.env.PORT);
