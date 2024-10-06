const express = require("express");
const router = express.Router();
const factionsController = require("../controllers/factionsController");

// Obtener todas las facciones
router.get("/", factionsController.getAllFactions);

// Obtener una facción por slug
router.get("/:slug", factionsController.getFactionBySlug);

module.exports = router;
