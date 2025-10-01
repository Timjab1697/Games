// backend/server.js
const express = require("express");


const app = express();
const PORT = 3001;

// Middleware para leer JSON
app.use(express.json());

// Ejemplo de trabajos
let jobs = [
  { id: 1, title: "Desarrollador Backend", company: "TechCol", status: "Abierto" },
  { id: 2, title: "Ingeniero DevOps", company: "CloudSoft", status: "Cerrado" },
];

// Ruta GET para obtener todos los trabajos
app.get("/jobs", (req, res) => {
  res.json(jobs);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
