const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");

// create post

router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savePost = await newPost.save();
        res.status(200).json(savePost);
    } catch (err) {
        res.status(500).json(err);
    }
})

// Update post
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (req.body.userName === post.userName) {
            try {
                const updatePost = await Post.findByIdAndUpdate(req.params.id, {
                    $set: req.body,
                }, {
                    new: true
                })

                res.status(200).json(updatePost);
                return;
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(401).json("You can only update your own post.")
        }

    } catch (err) {
        res.status(500).json(err);
    }
})

// Delete post
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (req.body.userName === post.userName) {
            try {
                await Post.findByIdAndDelete(req.params.id)
                res.status(200).json("The post is deleted");
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(401).json("You can only delete your own post.")
        }

    } catch (err) {
        res.status(500).json(err);
    }
})

// Get post
router.get("/:id", async (req, res) => {
    try {

        const post = await Post.findById(req.params.id);

        if (!post) {
            res.status(404).json("Post not found");
            return;
        }

        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
})

// Get all post
router.get("/", async (req, res) => {
    try {
        const userName = req.query.user;
        const category = req.query.category;

        try {
            let posts;
            if (userName) {
                posts = await Post.find({ userName })
            } else if (category) {
                posts = await Post.find({
                    categories: {
                        $in: [category],
                    }
                })
            } else {
                posts = await Post.find();
            }

            res.status(200).json(posts);
        } catch (err) {

        }
    } catch (err) {
        res.status(500).json(err);
    }
})


module.exports = router