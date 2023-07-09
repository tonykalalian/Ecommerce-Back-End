const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
// const Product = require("./models/Product");
// const User = require("./models/User");

require('dotenv').config();


// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Successfully connected to the database"))
  .catch((err) => {
    console.log(err);
  });
  // const newUser = new User({
  //   username: "admin",
  //   email: "admin@example.com",
  //   password: "password123",
  //   isAdmin: true,
  // });
  
  // // Save the user to the database
  // newUser.save()
  //   .then(() => {
  //     console.log("New user added successfully.");
  //     mongoose.connection.close(); // Close the database connection after saving
  //   })
  //   .catch((error) => {
  //     console.error("Error saving user:", error);
  //     mongoose.connection.close(); // Close the database connection in case of error
  //   });
  // const newProduct = new Product({
  //   title: "Tornado",
  //   desc: "This is a Black medium shoes",
  //   img: "https://media.istockphoto.com/id/148219720/photo/expensive-man-shoes-wedding-details.jpg?s=170667a&w=0&k=20&c=mEtjnRYpgy01wjN2R1XT7dnuY9Zdf1al4KOLcbFbLDo=",
  //   categories: ["Shoes"],
  //   size: ["M"],
  //   color: ["white"],
  //   price: 18.99,
  //   inStock: true,
  // });
  // async function saveProduct() {
  //   try {
  //     const savedProduct = await newProduct.save();
  //     console.log("Product saved successfully:", savedProduct);
  //   } catch (error) {
  //     console.error("Error saving product:", error);
  //   }
  // }
  
  // saveProduct();
    
// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
