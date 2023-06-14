const Product = require("../models/Product");

class ProductService {
  async createProduct(productData) {
    const newProduct = new Product(productData);
    return await newProduct.save();
  }

  async updateProduct(productId, productData) {
    return await Product.findByIdAndUpdate(productId, productData, { new: true });
  }

  async deleteProduct(productId) {
    return await Product.findByIdAndDelete(productId);
  }

  async getProduct(productId) {
    return await Product.findById(productId);
  }

  async getAllProducts() {
    return await Product.find();
  }
}

module.exports = new ProductService();
