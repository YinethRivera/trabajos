const fs = require("fs");
const ultimo = "ultimo.txt";

fs.readFile(ultimo, "utf-8", (err, data) => {
  if (err) throw err;
  console.log("el ultimo archivo contiene : ", data);
});
fs.appendFile(
  ultimo,
  " Llevar un paraguas cuando hay previsión de lluvia hace menos probable que llueva \n",
  (err) => {
    if (err) throw err;
    console.log("Contenido nuevo fue agregado correctamente");
  }
);
fs.readFile(ultimo, "utf-8", (err, data) => {
  if (err) throw err;
  console.log("el ultimo archivo  xd contiene : ", data);
});

