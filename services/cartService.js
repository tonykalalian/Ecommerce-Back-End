const Cart = require("../models/Cart");

class CartService {
  async createCart(cartData) {
    const newCart = new Cart(cartData);
    return await newCart.save();
  }

  async updateCart(cartId, cartData) {
    return await Cart.findByIdAndUpdate(cartId, cartData, { new: true });
  }

  async deleteCart(cartId) {
    return await Cart.findByIdAndDelete(cartId);
  }

  async getUserCart(userId) {
    return await Cart.findOne({ userId });
  }

  async getAllCarts() {
    return await Cart.find();
  }
}

module.exports = new CartService();
