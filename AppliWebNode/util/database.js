const mysql = require('mysql2');


export const pool = mysql.createPool({
    host: "localhost",
    database: "node",
    user: "root",
    password: "example",
  });