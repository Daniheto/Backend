const express = require("express");
const miApp = express();

const fs = require("fs");

class contenedor {
  constructor(archivo) {
    this.archivo = archivo;
  }

  getAll() {
    const productos = fs.readFileSync(this.archivo, "utf-8");
    return JSON.parse(productos);
  }

  getRandom() {
    const productosObetenidos = this.getAll();
    const random = Math.floor(Math.random() * productosObetenidos.length);
    return random;
  }
}

const contenedor1 = new contenedor("productos.txt");
contenedor1.getRandom();

function productoEnPantalla() {
  const resultado = contenedor1.getAll();
}

miApp.get("/productos", (req, res) => {
  res.send(productoEnPantalla());
});

function productoRandomEnPantalla() {
  const resultadoRandom = contenedor1.getRandom();
}

miApp.get("/productoRandom", (req, res) => {
  res.send(productoRandomEnPantalla());
});

const PORT = process.env.PORT || 8080;

const server = miApp.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${server.address().port}`);
});

server.on("error", (error) => console.log(`Error en servidor ${error}`));
