const express = require("express");
const multer = require("multer");
const db = require("../utils/db"); // 引入数据库连接池

const router = express.Router();

// 设置 multer 存储选项
const storage = multer.memoryStorage(); // 将文件保存在内存中
const upload = multer({ storage: storage }); // 创建 multer 上传实例

// 上传图片的路由
router.post("/upload", upload.single("image"), async (req, res) => {
  if (!req.file) {
    console.error("没有文件上传");
    return res.status(400).send("没有文件上传");
  }

  const { buffer, mimetype, originalname } = req.file;
  const createdAt = new Date(); // 获取上传的当前时间戳
  const query =
    "INSERT INTO images (name, mime_type, image_data, created_at) VALUES (?, ?, ?, ?)";

  try {
    // 执行数据库查询
    const [result] = await db.query(query, [
      originalname,
      mimetype,
      buffer,
      createdAt,
    ]);

    // 返回上传后的图片信息，包括 Base64 编码的图片数据
    const imageInfo = {
      id: result.insertId,
      name: originalname,
      mime_type: mimetype,
      created_at: createdAt,
      image: buffer.toString("base64"), // 将图片数据转换为 Base64 编码
    };

    // 返回图片信息到前端
    res.status(200).json({
      message: "图片上传成功",
      image: imageInfo,
    });
  } catch (err) {
    console.error("数据库操作失败:", err);
    res.status(500).send("存储图片失败");
  }
});

// 获取图片的路由
router.get("/image/:id", async (req, res) => {
  const imageId = req.params.id;
  const query =
    "SELECT name, mime_type, image_data, created_at FROM images WHERE id = ?";

  try {
    // 执行查询
    const [results] = await db.query(query, [imageId]);

    if (results.length === 0) {
      return res.status(404).send("图片未找到");
    }

    const image = results[0];

    // 设置响应头中的 MIME 类型
    res.setHeader("Content-Type", image.mime_type);

    // 创建响应数据，包含图片数据和额外的信息
    const imageData = {
      image: image.image_data.toString("base64"), // 将图片数据转换为 Base64 编码
      name: image.name,
      mime_type: image.mime_type,
      created_at: image.created_at,
    };

    // 返回图片信息和图片数据
    res.json(imageData);
  } catch (err) {
    console.error("查询失败:", err);
    res.status(500).send("图片获取失败");
  }
});

module.exports = router;
