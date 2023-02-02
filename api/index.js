const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const authroutes = require("./routes/auth");
const usersroutes = require("./routes/users");
const postsroutes = require("./routes/posts");
const categoriesroutes = require("./routes/categories");
const multer = require("multer");

dotenv.config();
app.use(express.json());

// code to connect to mongodb
mongoose.connect(process.env.MONGO_URL)
.then(console.log("Connect"))
.catch(console.log((err) => console.log(err)));


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images")
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name)
    }
})

const upload = multer({storage});
app.post("/api/upload", upload.single("file"), (req,res) => {
    res.status(200).json("File has been uploaded")
})

app.use("/api/auth", authroutes)
app.use("/api/users", usersroutes)
app.use("/api/posts", postsroutes)
app.use("/api/categories", categoriesroutes)

app.listen("5000", () => {
    console.log("Backend is running.")
});
