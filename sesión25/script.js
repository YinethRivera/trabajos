let numero = prompt("Ingresa un número: ");
cadena = numero.split("")
console.log (cadena)
let posición1 = cadena[0]
let posición2 = cadena[1]
console.log("posición1: " + posición1)
console.log("posición2: " + posición2)
let unidades = cadena[cadena.length - 1];
let decenas = cadena[cadena.length - 2];
console.log("unidades: " + unidades + "\nDecenas: " + decenas);
console.log("largo cadena: " + cadena.length);
console.log ("El último numero es: " + numero [numero.length -1])

+++++++++++++++++++++++++++++++++++

let continuar = true
let distancia =parseInt(prompt("Ingresar la distancia que deseas recorrer en Km: "))
while (continuar) {
let transporte = prompt("Elige uno de los siguientes medios de transporte: \n a = metro \n b = autobús \n c = taxi \n ");
switch (transporte) {
  case "a":
    console.log("metro.");
  if (distancia <=5 ){
  console.log("viajar esa distancia en metro tiene un valor de: 4500")
  } else if (distancia >15){
  console.log ("viajar esa distancia en metro tiene un valor de: 10500")
  } else { 
  console.log("viajar esa distancia en metro tiene un valor de: 7500")
  }
    continuar = false 
    break;
  case "b":
    console.log("autobús.");
   if (distancia <=5 ){
  console.log("viajar esa distancia en autobús tiene un valor de: 3000")
  } else if (distancia >15){
  console.log ("viajar esa distancia en autobús tiene un valor de: 7500")
  } else { 
  console.log("viajar esa distancia en autobús tiene un valor de: 5400")
  }
    continuar = false 
    break;
  case "c":
    console.log("taxi.");
    if (distancia <=5 ){
  console.log("viajar esa distancia en taxi tiene un valor de: 000")
  } else if (distancia >15){
  console.log ("viajar esa distancia en taxi tiene un valor de: 000")
  } else { 
  console.log("viajar esa distancia en taxi tiene un valor de: 000")
  }
    continuar = false
    break;
 default:
 console.log("¡ERROR!\t Opcion no valida: ");
}
}