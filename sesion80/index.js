//index es nuestro archivo principal.

const {suma, resta,obtenerInfoSistema, Tiempo } = require("./funciones.js")

var sumaDeDosNumeros =suma(15,19)
var restaDeDosNumeros =resta(29,9)
var infComputador = obtenerInfoSistema()
var infoTiempo = Tiempo()

console.log("La suma de los dos numeros es : ", sumaDeDosNumeros)
console.log("La resta de los dos numeros es : ", restaDeDosNumeros)
console.log("informacion del sistema : ",infComputador)
console.log("Éste es el tiempo de mi computador encendido: ", infoTiempo)
