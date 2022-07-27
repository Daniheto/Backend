let socket = io.connect();
socket.on("products", function (data) {
  console.log(data);
  render(data);
});

function render(data) {
  let html = data
    .map(function (elem, index) {
      return `<div>
          <strong>${elem.nombreProducto}</strong>:
          <em>${elem.precioProducto}</em> 
          <em>${elem.fotoProducto}</em>
          </div>
          `;
    })
    .join(" ");
  document.getElementById("products").innerHTML = html;
}

function addMessage() {
  let producto = {
    nombreProducto: document.getElementById("nombre").value,
    precioProducto: document.getElementById("precio").value,
    fotoProducto: document.getElementById("foto").value,
  };
  socket.emit("new-product", producto);

  document.getElementById("nombre").value = "";
  document.getElementById("nombre").focus();
  document.getElementById("precio").value = "";
  document.getElementById("precio").focus();
  document.getElementById("foto").value = "";
  document.getElementById("foto").focus();

  return false;
}
