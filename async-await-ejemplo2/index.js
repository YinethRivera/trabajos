// Leer datos de un archivo.
// Hacer una pausa (simular un proceso lento).
// Escribir datos en un archivo.



const leer = 'C:/Users/yinet/Desktop/Repositorio_trabajos_karina/trabajos1/async-await-ejemplo/input.txt'

const fs = require("fs");
function delay(ms){
    return new Promise(resolve=> setTimeout(resolve, ms))
}

//Declaramos la función asincrona para usar el await

async function funcionAsync(){
    console.log("buscando datos del archivo : ")
    
    await delay(8000)
    fs.readFile(leer, "utf-8", (err, data) => {
      if (err) throw err;
      console.log("el archivo contiene : ", data);


      const filePath = "archivoAgregar.txt";

      fs.writeFile(filePath, "Éste contenido es adicional. \n", (err) => {
        if (err) throw err;
        console.log("Contenido fue agregado correctamente");
      });
    });
    console.log("Archivo de texto leido despues del tiempo determinado")
}

funcionAsync()





