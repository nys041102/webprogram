const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "nys041102",   // 영서가 원래 쓰던 로컬 MySQL 비번
  database: "test"
});

module.exports = pool.promise();
