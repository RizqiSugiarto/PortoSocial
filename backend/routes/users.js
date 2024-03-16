const router = require("express").Router();
const authenticateToken = require("../middleware/validateTokenUser");
const User = require("../models/User");
const bcrypt = require("bcrypt");

//get by id
router.get("/:id", authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//update
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (error) {
        return res.status(500).json(error);
      }
    }
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json({ message: "account was updated" });
    } catch (error) {
      return res.status(500).json(error);
    }
  } else {
    return res.status(403).json({ message: "you only update your account!!" });
  }
});

//delete
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "Account has been deleted" });
    } catch (error) {
      return res.status(500).json(error);
    }
  } else {
    return res
      .status(403)
      .json({ message: "you only can delete your Account" });
  }
});

//follow
router.put("/:id/follow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({ $push: { followers: req.body.userId } });
        await currentUser.updateOne({ $push: { following: req.params.id } });
        res.status(200).json({ message: "user has been followed" });
      } else {
        res.status(403).json({ message: "you already follow this user" });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json({ message: "you cant follow yourshelf" });
  }
});

//unfollow
router.put("/:id/unfollow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (user.followers.includes(req.body.userId)) {
        await user.updateOne({ $pull: { followers: req.body.userId } });
        await currentUser.updateOne({ $pull: { following: req.params.id } });
        res.status(200).json({ message: "user has ben unfollow" });
      } else {
        res.status(403).json({ message: "you don't follow this account" });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json({ message: "you can't unfollow yourself" });
  }
});

module.exports = router;
