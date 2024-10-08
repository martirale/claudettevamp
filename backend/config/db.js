const mysql = require("mysql");
require("dotenv").config();

// Configuración de la conexión
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  charset: "utf8mb4",
});

// Exportar el pool
module.exports = pool;
