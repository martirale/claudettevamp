// index.js
const express = require("express");
const app = express();
const port = 3010;
const db = require("./config/db");
const bookRoutes = require("./routes/books");

app.use(express.json());

// Verifica la conexión a la base de datos
db.query("USE ClauDB", (err) => {
  if (err) {
    console.error("Error selecting database:", err);
    process.exit(1);
  }
  console.log("Database selected");
});

db.getConnection((err, connection) => {
  if (err) {
    console.error("Error al conectar a la base de datos:", err);
    process.exit(1);
  }
  console.log("Conectado a la base de datos MySQL");
  connection.release();
});

// Usa las rutas de la API
app.use("/books", bookRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
