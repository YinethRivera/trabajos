const fs =require('fs')
 const filePath = 'ultimoxd.txt'

 fs.readFile(filePath, 'utf-8', (err, data)=>{
    if(err) throw err; 
    console.log("El contenido original del archivo es \n", data)
    nuevoContenido = 'nuevo contenido'
    fs.writeFile(filePath, nuevoContenido, (err)=>{
        if(err)throw err;
        console.log('Arhivo editado con exito')
    })
 })
 fs.readFile(filePath, 'utf-8', (err, updatedData)=>{
    if(err) throw err; 
    console.log('contenido actualizado del archivo \n', updatedData)
 })