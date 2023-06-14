const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const authService = {
  register: async (userData) => {
    const { username, email, password } = userData;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw "Email is already registered";
    }

    // Encrypt the password
    const encryptedPassword = CryptoJS.AES.encrypt(password, process.env.PASS_SEC).toString();

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: encryptedPassword,
    });

 
      const savedUser = await newUser.save();
      return savedUser;

  },

  login: async (loginData) => {
    const { email, password } = loginData;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      throw "Email or password is incorrect";
    }

    // Decrypt the stored password and compare
    const decryptedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC).toString(
      CryptoJS.enc.Utf8
    );
    if (decryptedPassword !== password) {
      throw "Email or password is incorrect";
    }

    // Generate JWT token
    const token = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );

    const { password: _, ...userData } = user._doc;
    return {
      ...userData,
      accessToken: token,
    };
  },
};

module.exports = authService;
