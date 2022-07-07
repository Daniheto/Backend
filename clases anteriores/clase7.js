const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/sumar/:num1/:num2", (req, res) => {
  const { num1, num2 } = req.params;
  res.send({ suma: Number(num1) + Number(num2) });
});
app.get("/api/sumar", (req, res) => {
  const { num1, num2 } = req.query;
  res.send({ suma: Number(num1) + Number(num2) });
});

app.get("/api/sumar/:operacion", (req, res) => {
  const { operacion } = req.params;
  res.send({ operacion: eval(operacion) });
});

app.post("/api/sumar", (req, res) => {
  saveObject(req.body);
  res.send("Ok post");
});

app.put("/api", (req, res) => {
  res.send("Ok put");
});

app.delete("/api", (req, res) => {
  res.send("Ok delete");
});

const saveObject = (obj) => {
  console.log(obj);
};

const palabras = ["Frase", "inicial"];

app.get("/api/frase", (req, res) => {
  res.send({ frase: palabras.join(" ") });
});

app.post("/api/palabras", (req, res) => {
  const { palabra } = req.body;
  palabras.push(palabra);
  res.send({ agregada: palabra, posicion: palabras.length });
});

const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${server.address().port}`);
});

server.on("error", (error) => console.log(`Error en servidor ${error}`));
