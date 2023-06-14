const User = require("../models/User");
const CryptoJS = require("crypto-js");

class UserService {
  async updateUser(userId, userData) {
    if (userData.password) {
      userData.password = CryptoJS.AES.encrypt(
        userData.password,
        process.env.PASS_SEC
      ).toString();
    }
    return await User.findByIdAndUpdate(userId, userData, { new: true });
  }

  async deleteUser(userId) {
    return await User.findByIdAndDelete(userId);
  }

  async getUser(userId) {
    const user = await User.findById(userId);
    const { password, ...others } = user._doc;
    return others;
  }

  async getAllUsers() {
    return await User.find();
  }

  async getUserStats() {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
    return await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
  }
}

module.exports = new UserService();
