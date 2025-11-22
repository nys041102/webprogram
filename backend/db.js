const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "nys041102",
  database: "test"
});

module.exports = pool.promise();