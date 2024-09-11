const express = require("express");
const router = express.Router();
const booksController = require("../controllers/booksController");

// Obtener todos los libros
router.get("/", booksController.getAllBooks);

// Agregar un nuevo libro
router.post("/", booksController.addNewBook);

// Obtener un libro por slug
router.get("/:slug", booksController.getBookBySlug);

module.exports = router;
