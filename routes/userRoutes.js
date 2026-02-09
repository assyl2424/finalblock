const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const { updateProfile } = require("../controllers/authController");

router.get("/profile", protect, (req, res) => {
  res.status(200).json(req.user);
});

router.put("/profile", protect, updateProfile);

module.exports = router;