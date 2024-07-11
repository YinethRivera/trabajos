const fs = require('fs')

const xd = 'archivo.txt'
const  filePath = 'archivoNuevo.txt'


fs.writeFile(xd,  'Éste texto estará guardado en el archivo nuevo que estoy creando. \n', (err)=>{
    if(err) throw err
    console.log('Archivo creado con exito')
})


fs.readFile(xd, 'utf-8', (err, data)=>{
    if(err) throw err; 
    console.log("el archivo contiene : ", data)
})
fs.readFile(filePath, 'utf-8', (err, data)=>{
    if(err) throw err; 
    console.log("el archivo contiene : ", data)
})


fs.appendFile(filePath, 'Éste contenido es adicional. \n', (err)=>{
    if(err) throw err;
    console.log("Contenido fue agregado correctamente")
})





