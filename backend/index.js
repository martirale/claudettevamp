const express = require("express");
const app = express();
const port = 3010;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Charlotte loves Claudette so much, she would go to Hell for her.");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
