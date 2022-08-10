const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

// code to connect to mongodb
mongoose.connect(process.env.MONGO_URL)
.then(console.log("Conect"))
.catch(console.log((err) => console.log(err)));

app.listen("5000", () => {
    console.log("Backend is running.")
});