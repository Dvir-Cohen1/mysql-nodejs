require("dotenv").config();
const express = require("express");
const config = require("./config");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyParser.json());

const routes = require("./routes");
app.use("/", routes);

const port = config.port;
app.listen(port, () => console.log("Running on " + port));
