const express = require("express");
const router = express.Router();
const booksController = require("../controllers/booksController");

router.get("/", booksController.getAllBooks);

router.post("/", booksController.addNewBook);

module.exports = router;
