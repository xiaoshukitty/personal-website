const express = require('express');
const router = express.Router();
const axios = require('axios');
const cors = require('cors');
const COZE_API_KEY='pat_zyH3n7SG0c1hu9I0tCbGOTBjYMsJLLnPX9YUd4UJDCvtygjqDmtjoOlxrXnFaf6b';

router.use(cors());


router.post('/watermark-remove', async (req, res) => {
  try {
    // 添加请求体验证
    if (!req.body || !req.body.url) {
      return res.status(400).json({
        success: false,
        message: '请提供视频链接'
      });
    }

    console.log('收到请求URL:', req.body.url); // 添加日志


    const response = await axios.post('https://api.coze.cn/v1/workflow/run', {
      parameters: {
        url: req.body.url
      },
      workflow_id: "7477838202126516264"
    }, {
        headers: {
            'Authorization': 'Bearer ' + COZE_API_KEY, // 使用直接设置的变量
            'Content-Type': 'application/json'
          }
    });

    console.log('Coze API 响应:', response.data); // 添加日志

    if (response.data.code === 0) {
      const outputData = JSON.parse(response.data.data);
      res.json({
        success: true,
        videoUrl: outputData.output
      });
    } else {
      res.status(400).json({
        success: false,
        message: response.data.msg || '处理失败'
      });
    }
  } catch (error) {
    // 更详细的错误日志
    console.error('去水印处理错误:', {
      message: error.message,
      stack: error.stack,
      response: error.response?.data
    });

    res.status(500).json({
      success: false,
      message: '服务器处理错误: ' + error.message
    });
  }
});

module.exports = router;