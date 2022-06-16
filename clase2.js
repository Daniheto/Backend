class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }

  getFullName() {
    return `${this.nombre} ${this.apellido}`;
  }

  addMascota(mascota) {
    this.mascotas.push(mascota);
  }

  countMasctotas() {
    return this.mascotas.length;
  }

  addBook(nombre, autor) {
    this.libros.push({ nombre, autor });
  }

  getBookNames() {
    return this.libros.map((libro) => libro.nombre);
  }
}

const usuario = new Usuario(
  "Daniel",
  "Hernandez",
  [
    { nombre: "Viaje al centro de la tierra", autor: "Julio Verne" },
    { nombre: "El señor de los anillos", autor: "J.R.R. Tolkien" },
  ],
  ["perro", "gato", "pez", "pajaro"]
);

usuario.addMascota("caballo");
usuario.addBook("it", "Stephen King");
console.log(usuario.getFullName());
console.log(usuario.countMasctotas());
console.log(usuario.getBookNames());
console.log(usuario);
