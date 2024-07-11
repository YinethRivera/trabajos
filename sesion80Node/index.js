const path = require('path');

const filePath ="c:/Users/yinet/Desktop/Repositorio_trabajos_karina/trabajos1/sesion80Node/marca.png";

const baseName = path.basename(filePath);
console.log(`Base Name: ${baseName}`);

const dirName = path.dirname(filePath);
console.log(`Dir Name: ${dirName}`);

const extName = path.extname(filePath);
console.log(`Ext Name: ${extName}`);

const joinedPath = path.join(
  "/Users",
  "/yinet",
  "/Desktop",
  "/Repositorio_trabajos_karina",
  "/trabajos1",
  "/sesion80Node",
  "/marca.png",
);
console.log(`joined Name: ${joinedPath}`);

const resolvedPath = path.resolve(`examples.txt`);
console.log(`resolved Path: ${resolvedPath}`);

const parsedPath = path.parse(filePath);
console.log(`parsed Path:`, parsedPath);

const formattedPath = path.format(parsedPath);
console.log(`formatted Path: ${formattedPath}`);

const newFilePath = path.format({
    ...parsedPath,
    base: undefined,
    ext: '.md'
});
console.log(`New File Path: ${newFilePath}`)
