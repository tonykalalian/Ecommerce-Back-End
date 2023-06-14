const express = require("express");
const router = express.Router();
const stripeService = require("../services/stripeService");

router.post("/payment", async (req, res) => {
  try {
    const payment = await stripeService.processPayment(req.body.tokenId, req.body.amount);
    res.status(200).json(payment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
