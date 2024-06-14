function imprimirCuadro(alto,ancho){
	for (let i= 1; i<= alto; i++){
	let fila = ‘’
	let app =prompt("¡Hola, por favor elige una de las siguientes opciones:\n a) Mostrar ayuda. \n b) Abrir configuraciones. \n c) Iniciar un nuevo juego. \n d) Salir del programa. \n : ")
switch (app) {
  case "a":
    console.log("Mostrar ayuda");
    break;
  case "b":
    console.log("Abrir configuraciones");
    break;
  case "c":
    console.log("Iniciar un nuevo juego");
    break;
  case "d":
    console.log("Salir del programa");
    break;
  default:
    console.log("Por favor elegir una de las opciones anteriores");
}

console.log(fila)
}
}
imprimirCuadro(10,10)



/*Serie de Fibonacci hasta n
Escribe una función que genere la serie de Fibonacci hasta un número n dado.
 La serie de Fibonacci es una secuencia donde cada número es la suma de los dos números anteriores,
  empezando con 0 y 1*/

  let numeros= parseInt(prompt("Ingresa la cantidad de numeros que deseas imprimir: ")), a=0, b=1;
console.log(a)
console.log(b)
for(let n= 2; n< numeros; n++){
    let suma=(a+b)
    console.log(suma)
    a= b, b=suma
}
