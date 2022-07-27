const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

let messages = [];
let products = [];

app.use(express.static("public"));

io.on("connection", function (socket) {
  console.log("Un cliente se ha conectado");
  socket.emit("messages", messages);

  socket.on("new-message", function (data) {
    messages.push(data);
    io.sockets.emit("messages", messages);
  });
});

io.on("connection", function (socket) {
  console.log("Un cliente se ha conectado");
  socket.emit("products", products);

  socket.on("new-product", function (data) {
    products.push(data);
    io.sockets.emit("products", products);
  });
});

const PORT = process.env.PORT || 8080;

const srv = server.listen(PORT, () => {
  console.log(
    `Servidor Http con Websockets escuchando en el puerto ${srv.address().port}`
  );
});

srv.on("error", (error) => console.log(`Error en servidor ${error}`));
