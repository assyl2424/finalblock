const Product = require("../models/Product");

// CREATE PRODUCT (admin only)
const createProduct = async (req, res) => {
  try {
    const { name, description, price, category, sizes, stock } = req.body;

    const product = await Product.create({
      name,
      description,
      price,
      category,
      sizes,
      stock,
      createdBy: req.user._id,
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// GET ALL PRODUCTS
const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

// GET SINGLE PRODUCT
const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
};

// UPDATE PRODUCT
const updateProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  Object.assign(product, req.body);
  const updated = await product.save();

  res.json(updated);
};

// DELETE PRODUCT
const deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  await product.deleteOne();

  res.json({ message: "Product deleted" });
};

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};