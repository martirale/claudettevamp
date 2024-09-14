const express = require("express");
const app = express();
const port = 3010;
const db = require("./config/db");
const bookRoutes = require("./routes/books");
const characterRoutes = require("./routes/characters");
const verifyApiKey = require("./middlewares/auth");

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

// Usa el middleware para proteger las rutas
app.use("/books", verifyApiKey, bookRoutes);
app.use("/characters", verifyApiKey, characterRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
