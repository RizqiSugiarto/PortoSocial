const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { GenereateTokenJwt } = require("../utils/token");

//register
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: "Register Sucessfuly" });
  } catch (error) {
    res.status(500).json({ error });
    console.log(error);
  }
});

//login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({ message: "Wrong Email" });
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(400).json({ message: "Wrong Password" });
    }

    const token = GenereateTokenJwt(user.id, user.username);

    return res
      .cookie("access_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      })
      .status(200)
      .json({ message: "login successfuly", token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ err: error });
  }
});

module.exports = router;
