// 引入所需的库
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // 引入 CORS 中间件

const uploadRoutes = require("./routes/Image-processing"); // 引入路由模块
const articlesRoutes = require("./routes/articles-pictures");

const app = express();

// 设置中间件，解析请求体（对于 POST 请求）
app.use(express.json()); // 支持 JSON 格式请求
// 使用 body-parser 中间件来解析请求体
app.use(bodyParser.json()); //用于解析json 会自动选择最为适宜的解析方式
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
); //Context-Type 为application/x-www-form-urlencoded 时 返回的对象是一个键值对，当extended为false的时候，键值对中的值就为'String'或'Array'形式，为true的时候，则可为任何数据类型。
// 配置 CORS 中间件
app.use(cors()); // 默认允许所有来源的请求

// 使用路由
app.use(uploadRoutes);
app.use(articlesRoutes);

// 启动 Express 服务器
const port = 3000;
app.listen(port, () => {
  console.log(`服务器正在运行在 http://localhost:${port}`);
});
