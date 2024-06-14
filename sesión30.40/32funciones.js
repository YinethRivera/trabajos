let nombre = prompt("Ingresa el nombre del alumno: ")
let materia = prompt("Ingresa la materia que deseas calificar: ")

function notasAlumnos(nota1, nota2, nota3, nota4, nota5 ) {
let calificacion 
calificacion = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5)
calificacion = calificacion/ 5 
return calificacion
}
let n1 = parseFloat(prompt("Ingresa la primer nota: "))
let n2 = parseFloat(prompt("Ingresa la segunda nota: "))
let n3 = parseFloat(prompt("Ingresa la tercer nota: "))
let n4 = parseFloat(prompt("Ingresa la cuarta nota: "))
let n5 = parseFloat(prompt("Ingresa la quinta nota: "))
 
 
let promedio = notasAlumnos(n1, n2, n3, n4, n5 )
console.log(promedio)
console.log(nombre)
console.log(materia)


++++++++++++++++++++++++++++++++++++++

let base= parseFloat(prompt("ingresa el valor de la base del rectangulo :"));
let altura= parseFloat(prompt("ingresa el valor de altura del rectangulo :"));


function calcularAreaPerimetro(base, altura){
    let area = base * altura;
    let perimetro = (base + altura) * 2;
    
    return {area: area, 
    perimetro: perimetro};
};

let resultado = calcularAreaPerimetro(base, altura);

console.log("El área del rectangulo es:", resultado.area);
console.log("El área del rectangulo es:", resultado.perimetro);

+++++++++++++++++++++++++++++++++++++++++++


/*Crea una función que acepte dos números y una cadena que represente una operación
("suma", "resta", "multiplicacion", "division"). 
La función debe realizar la operación correspondiente y devolver el resultado.*/

let num1 = parseInt(prompt("Ingresar el primer valor: "));
let num2 = parseInt(prompt("Ingresar el segundo valor: "));
function calcular() {
  let continuar = true
while (continuar) {
   
  switch (operacion) {
    case "suma":
      resultado = num1 + num2;
      break;
    case "resta":
      resultado = num1 - num2;
      break;
    case "multiplicacion":
      resultado = num1 * num2;
      break;
    case "division":
        resultado = num1 / num2;
      break;
    default:
      resultado = "Operación no válida";
  }

  return resultado;
}
}
let operacion = prompt("Ingresar el nombre de la operacion que desea realizar: (suma, resta, multiplicacion, division): ");

let respuesta = calcular()
console.log("El resultado es: " + respuesta)


++++++++++++++++++++++++++++++++++++++++++++


/* Escribe una función que convierta una temperatura de Celsius a Fahrenheit o viceversa. 
La función debe aceptar la temperatura y una cadena que indique la escala de temperatura
 ("C" para Celsius, "F" para Fahrenheit) y devolver la temperatura convertida.*/

 let temperatura = parseInt(prompt("Ingresar la temperatura: "));
 let grados = prompt("Ingresar en que grados está la temperatura (C,F): ");
 
function convertirTemperatura() {
   let conversion;
   switch (grados) {
     case "C":
       conversion = (temperatura * 9/5)+32;
       break;
     case "F":
      conversion = (temperatura -32)*5/9;
       break;
     default:
      conversion= "Operación no válida";
   }
   return conversion;
 }
 console.log("la temperatura convertida es: " + convertirTemperatura());


