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
    slug,
  } = req.body;

  // Verifica si `synopsis` es un objeto, si es así, conviértelo a una cadena JSON
  const formattedSynopsis =
    typeof synopsis === "object" ? JSON.stringify(synopsis) : synopsis;

  const sql = `INSERT INTO books (title, synopsis, series, pages, publish, cover, amazon, apple, goodreads, slug)
               VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const values = [
    title,
    formattedSynopsis,
    series,
    pages,
    publish,
    cover,
    amazon,
    apple,
    goodreads,
    slug,
  ];

  db.query(sql, values, (error, results) => {
    if (error) {
      console.error("Error al agregar el libro:", error);
      return res.status(500).json({ error: "Error al agregar el libro" });
    }
    res.status(201).json({ id: results.insertId, ...req.body });
  });
};

// Obtener un libro por slug
exports.getBookBySlug = (req, res) => {
  const { slug } = req.params;

  const sql = `SELECT * FROM books WHERE slug = ?`;

  db.query(sql, [slug], (error, results) => {
    if (error) {
      console.error("Error al obtener el libro por slug:", error);
      return res.status(500).json({ error: "Error al obtener el libro" });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: "Libro no encontrado" });
    }
    res.json(results[0]);
  });
};
