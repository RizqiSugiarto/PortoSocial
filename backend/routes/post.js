const router = require("express").Router();
const authenticateToken = require("../middleware/validateTokenUser");
const Post = require("../models/Post");
const User = require("../models/User");

router.post("/", authenticateToken, async (req, res) => {
  const newPost = new Post(req.body);

  try {
    await newPost.save();
    res.status(200).json({ message: "post successfuly created" });
  } catch (error) {
    res.status(500).json({ err: error });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ err: error });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (req.body.userId === req.params.id) {
      await post.updateOne({ $set: req.body });
      res.status(200).json({ message: "updated successfuly" });
    } else {
      res.status(403).json({ message: "you only can update your post" });
    }
  } catch (error) {
    res.status(500).json({ err: error });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const del = await Post.findById(req.params.id);
    if (req.body.userId === req.params.id) {
      await del.deleteOne();
      res.status(200).json({ message: "deleted successfuly" });
    } else {
      res.status(403).json({ message: "you only can delete your account" });
    }
  } catch (error) {
    res.status(500).json({ err: error });
  }
});

router.put("/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json({ message: "Post successfuly liked" });
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).json({ message: "Post successfuly unliked" });
    }
  } catch (error) {
    res.status(500).json({ err: error });
  }
});

router.get("/timeline/all", async (req, res) => {
  try {
    const currentUser = await Post.findById(req.body.userId);
    const userPost = await Post.find({ userId: currentUser._id });
    const friendPost = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );
    res.json(userPost.concat(...friendPost));
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
