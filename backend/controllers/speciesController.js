const db = require("../config/db");

// Obtener todas las especies
exports.getAllSpecies = (req, res) => {
  db.query("SELECT * FROM species", (error, results) => {
    if (error) {
      console.error("Error al obtener las especies:", error);
      return res.status(500).json({ error: "Error al obtener las especies" });
    }
    res.json(results);
  });
};

// Obtener una especie por slug
exports.getSpecieBySlug = (req, res) => {
  const { slug } = req.params;

  const sql = `SELECT * FROM species WHERE slug = ?`;

  db.query(sql, [slug], (error, results) => {
    if (error) {
      console.error("Error al obtener la especie por slug:", error);
      return res.status(500).json({ error: "Error al obtener la especie" });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: "Especie no encontrada" });
    }
    res.json(results[0]);
  });
};
