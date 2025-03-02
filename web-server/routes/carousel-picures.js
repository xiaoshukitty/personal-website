const express = require("express");
const multer = require("multer");
const db = require("../utils/db"); // 引入数据库连接池

const router = express.Router();

// 设置 multer 存储选项
const storage = multer.memoryStorage(); // 将文件保存在内存中
const upload = multer({ storage: storage }); // 创建 multer 上传实例

// 上传图片的路由
router.post("/carousel-upload", upload.array('images', 5), async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      console.error("没有文件上传");
      return res.status(400).send("没有文件上传");
    }

    const results = [];
    
    // 处理每个上传的文件
    for (const file of req.files) {
      const { buffer, mimetype, originalname } = file;
      const createdAt = new Date();
      
      const query = "INSERT INTO carousel_picures (name, mime_type, image_data, created_at) VALUES (?, ?, ?, ?)";
      
      // 执行数据库查询
      const [result] = await db.query(query, [
        originalname,
        mimetype,
        buffer,
        createdAt,
      ]);

      results.push({
        id: result.insertId,
        name: originalname,
        mime_type: mimetype,
        created_at: createdAt
      });
    }

    res.status(200).json({
      message: "轮播图上传成功",
      images: results
    });
    
  } catch (err) {
    console.error("上传失败:", err);
    res.status(500).json({
      success: false,
      message: "轮播图上传失败"
    });
  }
});

// 获取最新的4张轮播图
router.get("/carousel-images", async (req, res) => {
  try {
    const query = `
      SELECT id, name, mime_type, image_data, created_at 
      FROM carousel_picures 
      ORDER BY created_at DESC 
      LIMIT 6
    `;

    const [rows] = await db.query(query);

    // 将图片数据转换为 Base64 格式
    const images = rows.map(row => ({
      id: row.id,
      name: row.name,
      mime_type: row.mime_type,
      url: row.image_data.toString('base64'),
      created_at: row.created_at
    }));
    

    res.status(200).json({
      success: true,
      images: images
    });

  } catch (err) {
    console.error("获取轮播图失败:", err);
    res.status(500).json({
      success: false,
      message: "获取轮播图失败"
    });
  }
});

module.exports = router;
