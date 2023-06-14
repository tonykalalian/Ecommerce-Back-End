const stripe = require("stripe")(process.env.STRIPE_KEY);

class StripeService {
  async makePayment(tokenId, amount) {
    try {
      const payment = await stripe.charges.create({
        source: tokenId,
        amount,
        currency: "usd",
      });
      return payment;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new StripeService();
