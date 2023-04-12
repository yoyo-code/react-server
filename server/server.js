const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({ users: ["user1", "user2", "user3", "pepito", "juanito"] });
});

app.listen(5000, () => {
  console.log("Servidor iniciado en puerto 5000");
});
