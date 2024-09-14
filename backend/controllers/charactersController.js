const db = require("../config/db");

// Obtener todos los personajes
exports.getAllCharacters = (req, res) => {
  db.query("SELECT * FROM characters", (error, results) => {
    if (error) {
      console.error("Error al obtener los personajes:", error);
      return res.status(500).json({ error: "Error al obtener los personajes" });
    }
    res.json(results);
  });
};

// Agregar un nuevo personaje
exports.addNewCharacter = (req, res) => {
  const {
    name,
    name_original,
    name_others,
    birth,
    family,
    clan,
    affiliations,
    relationship,
    couple,
    species,
    gender,
    stature,
    weight,
    eyes,
    hair,
    skin,
    occupation,
    weapon,
    appearance,
    avatar,
    description,
    curiosity,
    type,
    slug,
  } = req.body;

  // Validar que los campos obligatorios estén presentes
  if (!name || !slug || !type) {
    return res.status(400).json({ error: "Campos obligatorios faltantes" });
  }

  const sql = `INSERT INTO characters (name, name_original, name_others, birth, family, clan, affiliations, relationship, couple, species, gender, stature, weight, eyes, hair, skin, occupation, weapon, appearance, avatar, description, curiosity, type, slug)
               VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const values = [
    name,
    name_original,
    name_others,
    birth,
    family,
    clan,
    affiliations,
    relationship,
    couple,
    species,
    gender,
    stature,
    weight,
    eyes,
    hair,
    skin,
    occupation,
    weapon,
    appearance,
    avatar,
    description,
    curiosity,
    type,
    slug,
  ];

  db.query(sql, values, (error, results) => {
    if (error) {
      console.error("Error al agregar el personaje:", error);
      return res.status(500).json({ error: "Error al agregar el personaje" });
    }

    // Opcional: hacer una consulta para obtener los detalles del personaje recién creado
    const insertedCharacterId = results.insertId;
    db.query(
      "SELECT * FROM characters WHERE id = ?",
      [insertedCharacterId],
      (err, characterResults) => {
        if (err) {
          console.error("Error al obtener el personaje agregado:", err);
          return res
            .status(500)
            .json({ error: "Error al obtener el personaje agregado" });
        }
        res.status(201).json(characterResults[0]);
      }
    );
  });
};

// Obtener un personaje por slug
exports.getCharacterBySlug = (req, res) => {
  const { slug } = req.params;

  const sql = `SELECT * FROM characters WHERE slug = ?`;

  db.query(sql, [slug], (error, results) => {
    if (error) {
      console.error("Error al obtener el personaje por slug:", error);
      return res.status(500).json({ error: "Error al obtener el personaje" });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: "Personaje no encontrado" });
    }
    res.json(results[0]);
  });
};
