const Order = require("../models/Order");

class OrderService {
  async createOrder(orderData) {
    const newOrder = new Order(orderData);
    return await newOrder.save();
  }

  async updateOrder(orderId, orderData) {
    return await Order.findByIdAndUpdate(orderId, orderData, { new: true });
  }

  async deleteOrder(orderId) {
    return await Order.findByIdAndDelete(orderId);
  }

  async getUserOrders(userId) {
    return await Order.find({ userId });
  }

  async getAllOrders() {
    return await Order.find();
  }

  async getMonthlyIncome() {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(
      new Date().setMonth(lastMonth.getMonth() - 1)
    );
    return await Order.aggregate([
      { $match: { createdAt: { $gte: previousMonth } } },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
  }
}

module.exports = new OrderService();
