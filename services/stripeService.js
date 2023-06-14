const stripe = require("stripe")(process.env.STRIPE_KEY);

class StripeService {
  async makePayment(tokenId, amount) {
  
      const payment = await stripe.charges.create({
        source: tokenId,
        amount,
        currency: "usd",
      });
      return payment;
  }
}

module.exports = new StripeService();
