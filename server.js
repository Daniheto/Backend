import express, { urlencoded, Router } from "express";
import multer from "express";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const productos = [];

app.get("/api/productos", (req, res) => {
  res.json(productos);
});

app.get("/api/productos/:id", (req, res) => {
  const id = parseInt(req.params.id);
});

app.post("/api/palabras", (req, res) => {
  let i = 0;
  productos.push(req.body);
  res.json(req.body + i++);
});

app.put("/api/productos/:id", (req, res) => {
  productos.push(req.params.id);
  res.json(req.body);
});

app.delete("/api/productos/:id", (req, res) => {
  productos.push(req.params.id);
  res.json([]);
});

const PORT = 8081;

const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${server.address().port}`);
});

server.on("error", (error) => console.log(`Error en servidor ${error}`));
