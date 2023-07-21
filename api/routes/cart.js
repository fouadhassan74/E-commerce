const Cart = require("../models/cart");
const { route } = require("./auth");
const {
  verifyToken,
  verifyTokenAndAuthorisation,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const router = require("express").Router();
// Create
router.post("/", async (req, res) => {
  const newCart = new Cart(req.body);
  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (e) {
    res.status(500).json(e);
  }
});

//Update
router.put("/:id", async (req, res) => {
  try {
    const updateCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateCart);
  } catch (e) {
    res.status(500).json(e);
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart has been deleted...");
  } catch (e) {
    res.status(500).json(e);
  }
});

//Get User Cart
router.get("/:UserId", async (req, res) => {
  const cart = await Cart.findOne({ userId: req.params.UserId });
  res.status(200).json(cart);
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    res.status(200).json(cart);
  } catch (e) {
    res.status(500).json(e);
  }
});

// Get All
router.get("/", async (req, res) => {
  try {
    const cart = await Cart.find();
    res.status(200).json(cart);
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
