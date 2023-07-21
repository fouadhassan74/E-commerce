const router = require("express").Router();
const User = require("../models/user");
const CryptoJS = require("crypto-js");
const Jwt = require("jsonwebtoken");
const { verifyTokenAndAuthorisation } = require("./verifyToken");
// Register

router.post("/register", async (req, res) => {
  const newUser = new User({
    userName: req.body.userName,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password, "fouad").toString(),
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (e) {
    res.status(500).json(e);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      userName: req.body.userName,
    });
    !user && res.status(401).json("Wrong  userName");
    const hashedPassword = CryptoJS.AES.decrypt(user.password, "fouad");
    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    const inputPassword = req.body.password;
    inputPassword !== originalPassword &&
      res.status(401).json("Wrong Passwoed");
    const accessToken = Jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      "fouad",
      { expiresIn: "3d" }
    );
    const { password, ...others } = user._doc;
    res.status(200).json({ ...others, accessToken });
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
