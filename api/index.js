const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const authroutes = require("./routes/auth");

dotenv.config();
app.use(express.json());

// code to connect to mongodb
mongoose.connect(process.env.MONGO_URL)
.then(console.log("Conect"))
.catch(console.log((err) => console.log(err)));

app.use("/api/auth", authroutes)

app.listen("5000", () => {
    console.log("Backend is running.")
});