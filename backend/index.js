const express = require("express");
const app = express();
const port = 3010;
const db = require("./config/db");

app.use(express.json());

// Verifica la conexión a la base de datos
db.query("USE ClauDB", (err) => {
  if (err) {
    console.error("Error selecting database:", err);
    process.exit(1); // Salir del proceso si no se puede seleccionar la base de datos
  }
  console.log("Database selected");
});

// Verifica la conexión a la base de datos
db.getConnection((err, connection) => {
  if (err) {
    console.error("Error al conectar a la base de datos:", err);
    process.exit(1); // Salir del proceso si no se puede conectar
  }
  console.log("Conectado a la base de datos MySQL");
  connection.release(); // Libera la conexión
});

// Ruta para obtener todos los libros
app.get("/books", (req, res) => {
  db.query("SELECT * FROM books", (error, results) => {
    if (error) {
      console.error("Error al obtener los libros:", error);
      return res.status(500).json({ error: "Error al obtener los libros" });
    }
    res.json(results);
  });
});

// Ruta para agregar un nuevo libro
app.post("/books", (req, res) => {
  const { title, synopsis, author, year } = req.body;
  db.query(
    "INSERT INTO books (title, synopsis, author, year) VALUES (?, ?, ?, ?)",
    [title, synopsis, author, year],
    (error, results) => {
      if (error) {
        console.error("Error al agregar el libro:", error);
        return res.status(500).json({ error: "Error al agregar el libro" });
      }
      res
        .status(201)
        .json({ id: results.insertId, title, synopsis, author, year });
    }
  );
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
