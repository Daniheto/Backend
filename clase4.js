const fs = require("fs");

class contenedor {
  constructor(archivo) {
    this.archivo = archivo;
  }

  save() {
    const archivo = this.archivo;
    async () => {
      try {
        let archivo = await fs.promises.writeFile(
          "producto.txt",
          JSON.stringify(producto1, null, 2)
        );
        let i = 0;
        obj.producto = "id = i++";
      } catch (error) {
        console.log(`error en lectura: ${error}`);
      }
    };
    archivo();
  }

  getById() {
    const archivo = this.archivo;
    async () => {
      try {
        let archivo = await fs.promises.readFile("productos.txt", "utf-8");
        let obj = JSON.parse(archivo).find((elemento) => elemento.id === id);
        if (obj) {
          console.log(obj);
        } else {
          console.log(null);
        }
        obj.producto = "";
        await fs.promises.writeFile("producto.");
      } catch (error) {
        console.log(`error en lectura: ${error}`);
      }
    };
    archivo();
  }

  getAll() {
    const archivo = this.archivo;
    async () => {
      try {
        let archivo = await fs.promises.readFile("productos.txt", "utf-8");
        console.log(JSON.parse(archivo));
      } catch (error) {
        console.log(`error en lectura: ${error}`);
      }
    };
  }

  // deleteById() {}

  deleteAll() {
    const archivo = this.archivo;
    async () => {
      try {
        let archivo = await fs.promises.writeFile("productos.txt", "");
        console.log(JSON.parse(archivo));
      } catch (error) {
        console.log(`error en lectura: ${error}`);
      }
    };
  }
}
const producto1 = {
  title: "producto1",
  price: 100,
  thumbnail: "https://picsum.photos/200",
  id: 1,
};
