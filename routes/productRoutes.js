const checkRole = require("../middleware/roleMiddleware");
const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

router.post("/", protect, createProduct);
router.get("/", getProducts);
router.get("/:id", getProductById);
router.put("/:id", protect, updateProduct);
router.delete("/:id", protect, deleteProduct);

module.exports = router;