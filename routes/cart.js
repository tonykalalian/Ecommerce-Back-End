const express = require("express");
const router = express.Router();
const cartService = require("../services/cartService");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

// CREATE
router.post("/", verifyToken, async (req, res) => {
  try {
    const newCart = await cartService.createCart(req.body);
    res.status(200).json(newCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedCart = await cartService.updateCart(req.params.id, req.body);
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await cartService.deleteCart(req.params.id);
    res.status(200).json("Cart has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET USER CART
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const cart = await cartService.getUserCart(req.params.userId);
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL CARTS
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const carts = await cartService.getAllCarts();
    res.status(200).json(carts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
