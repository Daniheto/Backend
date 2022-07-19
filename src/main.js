const express = require("express");
const app = express();

const productos = [];

app.use(express.urlencoded({ extended: true }));

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  for (let i = 0; i < productos.length; i++) {
    const idProducto = productos[i];
    console.log(idProducto);
  }
  res.render("inicio", { productos });
});

app.post("/productos", (req, res) => {
  const cargaProductos = productos.push(req.body);
  console.log(productos);
  console.log("id", cargaProductos);
  res.redirect("/");
});

app.put("/api/productos/:id", (req, res) => {
  const actualizarProducto = productos.find(req.params.id);
  actualizarProducto.push;
  res.json(req.body);
});

app.delete("/api/productos/:id", (req, res) => {
  const borrarProducto = productos.find(req.params.id);
  res.json(borrarProducto([]));
});

const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${server.address().port}`);
});

server.on("error", (error) => console.log(`Error en servidor ${error}`));
