const db = require("../config/db");

// Obtener todas las facciones
exports.getAllFactions = (req, res) => {
  db.query("SELECT * FROM factions", (error, results) => {
    if (error) {
      console.error("Error al obtener las facciones:", error);
      return res.status(500).json({ error: "Error al obtener las facciones" });
    }
    res.json(results);
  });
};

// Obtener una facción por slug
exports.getFactionBySlug = (req, res) => {
  const { slug } = req.params;

  const sql = `SELECT * FROM factions WHERE slug = ?`;

  db.query(sql, [slug], (error, results) => {
    if (error) {
      console.error("Error al obtener la facción por slug:", error);
      return res.status(500).json({ error: "Error al obtener la facción" });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: "Facción no encontrada" });
    }
    res.json(results[0]);
  });
};
