const mongoose = require("mongoose")

const Catagories = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model("Catagories", Catagories);