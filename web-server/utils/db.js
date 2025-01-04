const mysql = require("mysql2");

// 创建连接池
const pool = mysql.createPool({
  host: "127.0.0.1", // 服务器地址
  user: "root", // MySQL 用户名
  password: "sh001220", // MySQL 密码
  database: "personal_website", // 你想要操作的数据库名称
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  acquireTimeout: 30000, // 设置连接超时时间为30秒
});

// 使用 Promise API 以支持 async/await
const promisePool = pool.promise();

module.exports = promisePool;
