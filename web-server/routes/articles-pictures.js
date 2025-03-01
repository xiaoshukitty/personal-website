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

router.post('/add/articles', async (req, res) => {
  try {
    const {
      avatar_url,
      title,
      username,
      upload_date,
      comments_count,
      views_count,
      tags,
      type,
      images_url
    } = req.body;
    console.log(req.body);
    
    // 验证必填字段
    if (!title || !username) {
      return res.status(400).json({ message: '标题和用户名为必填项' });
    }

    // 创建新文章
    const newArticle = new Article({
      avatar_url,
      title,
      username,
      upload_date: upload_date || new Date(),
      comments_count: comments_count || 0,
      views_count: views_count || 0,
      tags: tags || [],
      type,
      images_url: images_url || []
    });

    // 保存到数据库
    const query =
    "INSERT INTO articles_pictures ( avatar_url,title,username,upload_date,comments_count,views_count,tags,type,images_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

    await promisePool.query(query, [
      avatar_url,
      title,
      username,
      upload_date,
      comments_count,
      views_count,
      tags,
      type,
      images_url
    ]);

    res.status(200).json({
      success: true,
      data: newArticle
    });
    
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '服务器错误',
      error: error.message
    });
  }
});

module.exports = router;
