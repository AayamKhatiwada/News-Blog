const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// Register

router.post("/register", async (req, res) => {

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);

    try {
        const newUser = new User({
            userName: req.body.userName,
            email: req.body.email,
            password: hashedPass,
        });

        const user = await newUser.save();
        res.status(200).json(user);
    }

    catch (err) {
        res.status(500).json(err)
    }
})

// Login

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ userName: req.body.userName })
        if (!user) {
            res.status(400).json("wrong username")
            return;
        };

        const validated = await bcrypt.compare(req.body.password, user.password);
        if (!validated) {
            res.status(400).json("wrong password");
            return;
        }

        const { password, ...others } = user._doc;

        res.status(200).json(others)
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router