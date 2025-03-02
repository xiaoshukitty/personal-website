const mysql = require("mysql2");

// 创建连接池
const pool = mysql.createPool({
  host: process.env.DB_HOST || "127.0.0.1",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "sh001220",
  database: process.env.DB_NAME || "personal_website",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  charset: 'utf8mb4',
  timezone: 'local'
});

// 使用 Promise API 以支持 async/await
const promisePool = pool.promise();

module.exports = promisePool;
