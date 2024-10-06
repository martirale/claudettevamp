const express = require("express");
const router = express.Router();
const speciesController = require("../controllers/speciesController");

// Obtener todas las especies
router.get("/", speciesController.getAllSpecies);

// Obtener una especie por slug
router.get("/:slug", speciesController.getSpecieBySlug);

module.exports = router;
