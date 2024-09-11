const db = require("../config/db");

// Obtener todos los libros
exports.getAllBooks = (req, res) => {
  db.query("SELECT * FROM books", (error, results) => {
    if (error) {
      console.error("Error al obtener los libros:", error);
      return res.status(500).json({ error: "Error al obtener los libros" });
    }
    res.json(results);
  });
};

// Agregar un nuevo libro
exports.addNewBook = (req, res) => {
  const {
    title,
    synopsis,
    series,
    pages,
    publish,
    cover,
    amazon,
    apple,
    goodreads,
  } = req.body;

  const sql = `INSERT INTO books (title, synopsis, series, pages, publish, cover, amazon, apple, goodreads)
               VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const values = [
    title,
    synopsis,
    series,
    pages,
    publish,
    cover,
    amazon,
    apple,
    goodreads,
  ];

  db.query(sql, values, (error, results) => {
    if (error) {
      console.error("Error al agregar el libro:", error);
      return res.status(500).json({ error: "Error al agregar el libro" });
    }
    res.status(201).json({ id: results.insertId, ...req.body });
  });
};
