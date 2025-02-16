const express = require("express");
const promisePool = require("../utils/db"); // 引入数据库连接池
const router = express.Router();

// 获取图片列表及其对应的所有图片地址
router.post("/image-list", async (req, res) => {
  const imageListId = req.body.id;

  const query = "SELECT * FROM articles_pictures WHERE id = ?";

  try {
    const [rows] = await promisePool.query(query, [imageListId]);

    for (let i = 0; i < rows.length; i++) {
      if (rows[i].images_url && rows[i].images_url != null) {
        rows[i].images_url = JSON.parse(rows[i].images_url);
      }
    }

    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
