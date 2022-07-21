const fs = require("fs");

const archivo = async () => {
  try {
    let archivo = await fs.promises.readFile("productos.txt", "utf-8");
    let obj = JSON.parse(archivo);
    console.log(obj);
  } catch (error) {
    console.log(`error en lectura: ${error}`);
  }
};
console.log(archivo);

let socket = io.connect();
socket.on("messages", function (data) {
  console.log(data);
  render(data);
});

function render(data) {
  let html = data
    .map(function (elem, index) {
      return `<div>
        <strong>${elem.author}</strong>:
        <em>${elem.text}</em> </div>
        `;
    })
    .join(" ");
  document.getElementById("messages").innerHTML = html;
}

function addMessage() {
  let mensaje = {
    author: document.getElementById("username").value,
    text: document.getElementById("texto").value,
  };
  socket.emit("new-message", mensaje);

  document.getElementById("texto").value = "";
  document.getElementById("texto").focus();

  return false;
}
