function Organizar_Archivos(
  Carpeta_archivos,
  Carpeta_destino,
  Accion = ""
) 
{

  const fs = require("fs");
  const path = require("path");
  const Crear_Carpeta = (dir) => {
    fs.mkdir(path.join(Carpeta_destino, dir),(err) => {
      if (err) {
        console.error(`Error al crear la carpeta: ${err}`);
      }
    });
  };

  fs.readdir(Carpeta_archivos, (err, files) => {
    if (err) {
      console.error("Error al leer el directorio:", err);
      return;
    }

    files.forEach((item) => {
      const file = path.join(Carpeta_archivos, item);
      const ExtName = path.extname(file);
      let destino = "";
      if (ExtName) {
        const nombreCarpeta = ExtName.substring(1);
        Crear_Carpeta(nombreCarpeta);
        destino = path.join(Carpeta_destino, nombreCarpeta, item);
        console.log(destino);
        fs.copyFile(file, destino, (err) => {
          if (err) {
            console.error(`Error al copiar el archivo: ${item}`, err);
            return;
          }
          if (Accion == "mover") {
            fs.unlink(file, (err) => {
              if (err) {
                console.error(
                  `Error al eliminar el archivo original: ${item}`,
                  err
                );
                return;
              }
              console.log(`Archivo ${item} movido exitosamente.`);
            });
          }
        });
      } else {
        console.log("No se puede mover el archivo:", item);
      }
    });
  });
}
const Carpeta_archivos =
  "C:/Users/yinet/Desktop/Repositorio_trabajos_karina/trabajos1/file-organizer/input_files";

const Carpeta_destino =
"C:/Users/yinet/Desktop/Repositorio_trabajos_karina/trabajos1/file-organizer/Archivos_organizados";

Organizar_Archivos(Carpeta_archivos, Carpeta_destino, "mover");
