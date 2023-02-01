const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const authroutes = require("./routes/auth");
const usersroutes = require("./routes/users");

dotenv.config();
app.use(express.json());

// code to connect to mongodb
mongoose.connect(process.env.MONGO_URL)
.then(console.log("Connect"))
.catch(console.log((err) => console.log(err)));

app.use("/api/auth", authroutes)
app.use("/api/users", usersroutes)

app.listen("5000", () => {
    console.log("Backend is running.")
});
