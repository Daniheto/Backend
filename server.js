const express = require("express");
const { Router, json } = require("express");

const app = express();

app.use(express.static("public"));

const routerProductos = Router();
const routerCarrito = Router();

app.use("/productos", routerProductos);
app.use("/carrito", routerCarrito);

routerProductos.use(express.json());
routerCarrito.use(express.json());
routerProductos.use(express.urlencoded({ extended: true }));
routerCarrito.use(express.urlencoded({ extended: true }));

const productos = [
  {
    nombre: "producto1",
    descripcion: "descripcion1",
    foto: "https://picsum.photos/200",
    precio: 2,
    codigo: 1,
    stock: 10,
    timestamp: 1,
    id: 1,
  },
  {
    nombre: "producto2",
    descripcion: "descripcion2",
    foto: "https://picsum.photos/200",
    precio: 2,
    codigo: 2,
    stock: 10,
    timestamp: 1,
    id: 2,
  },
];

const validar = (req, res, next) => {
  if (req.headers.admin === true) {
    next();
  } else {
    res.status(401).JSON({ error: -1, descripción: "Ruta no autorizada." });
  }
};

app.use(express.urlencoded({ extended: true }));

// Poductos

routerProductos.get("/visualizar/:id?", (req, res) => {
  let id = req.params.id;
  let response = null;
  if (id) {
    productos.filter((element) => {
      if (element.id == id) {
        response = element;
      }
    });
    return res.send(response);
  }
  return res.json(productos);
});

routerProductos.post("/enviar", (req, res) => {
  productos.push(req.body);
  res.json(productos);
});

routerProductos.put("/actualizar/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;
  productos.filter((element) => {
    if (element.id == id) {
      element.nombre = body.nombre;
      element.descripcion = body.descripcion;
      element.foto = body.foto;
      element.precio = body.precio;
      element.codigo = body.codigo;
      element.stock = body.stock;
      element.timestamp = body.timestamp;
    }
  });
  res.json(productos);
});

routerProductos.delete("/borrar/:id", (req, res) => {
  const id = req.params.id;
  productos.filter((element, index) => {
    if (element.id == id) {
      productos.splice(index, 1);
    }
  });
  res.json(productos);
});

//Carrito

const carrito = [];

routerCarrito.post("/", (req, res) => {
  for (let i = 0; i < carrito.length; i++) {
    const idCarrito = carrito[i];
    if ((elemnt.id = [])) element.id = idCarrito++;
  }
  carrito.push(req.body);
  res.json(carrito);
});

routerCarrito.delete("/:id", (req, res) => {
  const id = req.params.id;
  carrito.filter((element, index) => {
    if (element.id == id) {
      carrito.splice(index, 1);
    }
  });
  res.json(carrito);
});

routerCarrito.get("/:id/productos", (req, res) => {
  let id = req.params.id;
  let response = null;
  if (id) {
    carrito.filter((element) => {
      if (element.id == id) {
        response = element;
      }
    });
    return res.send(response);
  }
  return res.json(carrito);
});

routerCarrito.post("/:id/productos", (req, res) => {
  carrito.push(req.body);
  res.json(carrito);
});

routerCarrito.delete("/:id/productos/:id_prod", (req, res) => {
  const id = req.params.id;
  const id_prod = req.params.id_prod;
  carrito.filter((element, index) => {
    if (element.id == id && element.id_prod == id_prod) {
      productos.splice(index, 1);
    }
  });
  res.json(carrito);
});

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${server.address().port}`);
});

server.on("error", (error) => console.log(`Error en servidor ${error}`));
