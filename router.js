const express = require("express");
const router = express.Router();
const Product = require("./model/product"); // Import model sản phẩm từ file riêng

// Endpoint để lấy tất cả các sản phẩm trong kho hàng
router.get("/products", async (req, res) => {
  try {
    const products = await Product.find(); // Tìm tất cả các sản phẩm trong cơ sở dữ liệu
    res.json(products); // Trả về kết quả dưới dạng JSON
  } catch (error) {
    res.status(500).json({ message: error.message }); // Trả về lỗi nếu có
  }
});

module.exports = router;