const fs = require("fs");

// Función para crear un archivo de diario
function archivoDiario() {
  fs.writeFile("diario.txt", "Hola soy yineth, tengo 21 años \n", (err) => {
    if (err) throw err;
    console.log("Archivo diario creado xd");
  });

}/* leer y mostrar el contenido*/

function leerDiario() {
  fs.readFile("diario.txt", "utf8", (err, contenido) => {
    if (err) throw err;
    console.log(contenido);
  });
}


function agregarEntrada(nuevaEntrada) {
  fs.appendFile("diario.txt", `${nuevaEntrada}\n`, (err) => {
    if (err) throw err;
    console.log("Entrada agregada con éxito.");
  });
}

function editarEntrada(entradaVieja, entradaNueva) {
  fs.readFile("diario.txt", "utf8", (err, contenido) => {
    if (err) throw err;
    const nuevoContenido = contenido.replace(entradaVieja, entradaNueva);
    fs.writeFile("diario.txt", nuevoContenido, (err) => {
      if (err) throw err;
      console.log("Editado: hola como estás mi nombre es Yineth Karina.");
    });
  });
}

module.exports = {
  archivoDiario,
  leerDiario,
  agregarEntrada,
  editarEntrada,
}
