const API_SECRET_KEY = process.env.API_SECRET_KEY;

const verifyApiKey = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];
  if (apiKey && apiKey === API_SECRET_KEY) {
    next();
  } else {
    res.status(403).send("Forbidden");
  }
};

module.exports = verifyApiKey;
