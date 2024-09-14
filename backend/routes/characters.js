const express = require("express");
const router = express.Router();
const charactersController = require("../controllers/charactersController");

// Obtener todos los personajes
router.get("/", charactersController.getAllCharacters);

// Agregar un nuevo personaje
router.post("/", charactersController.addNewCharacter);

// Obtener un personaje por slug
router.get("/:slug", charactersController.getCharacterBySlug);

module.exports = router;
