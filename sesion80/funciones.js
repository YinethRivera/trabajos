const os = require("os")
const fs = require('node:fs')

const stats = fs.statSync('./archivo.txt')

console.log(
    stats.isFile(),
    stats.isDirectort(),
    stats.isSymbolicLink()
)

function obtenerInfoSistema(){
    return{
        plataforma: os.platform(),
        arquitectura: os.arch(),
        nombreSistema: os.uptime(),
        infoMemoria: os.totalmem()
    }
}
function Tiempo(){
    return{
        tiempoC: os.uptime()
    }
}
function suma(a ,b){
    return a+b
}
function resta(a ,b){
    return a-b
}

module.exports = {
    suma,
     resta,
     obtenerInfoSistema,
     Tiempo,

    };


