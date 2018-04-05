const express = require("express");
const bodyParser = require("body-parser");
const exprhbs = require("express-handlebars");
const routes = require("./routes");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine("handlebars", exprhbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/meetup"
mongoose.connect(MONGODB_URI);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});