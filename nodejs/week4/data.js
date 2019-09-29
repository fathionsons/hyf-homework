const mysql = require('mysql');

require('dotenv').config();

const pool = mysql.createPool( {
    connectionLimit: 10,
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT,
    multipleStatements: false,
});

pool.getConnection((err, connection) => {
    if (err) {
      if (err.code === "Lost") {
        console.error("closed.");
      }
      if (err.code === "ERROR") {
        console.error("too many connections.");
      }
      if (err.code === "conFUSED") {
        console.error(" refused.");
      }
    }
    if (connection) connection.release();
    return;
});


module.exports = pool;