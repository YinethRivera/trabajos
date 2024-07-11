
// Crea un directorio llamado async-await-ejemplo.
// Dentro de este directorio, crea un archivo llamado index.js.
// Dentro del mismo directorio, crea un archivo llamado input.txt y escribe algo de texto en él.

const fs = require("fs");
const xd = "input.txt";

fs.writeFile( xd,"Éste texto estará guardado en el archivo nuevo que estoy creando: moshimo ahonishiwo watareru nanabawatashiwa ishiro dashikoeteiu hitai omoku shiranai batsiname iite shiramateou tawo ottoete kitai aneanari nanatauga\n", (err) => {
    if (err) throw err;
    console.log("El archivo se creó con exito c: ");
  }
);