let min = 1;
let max = 100;
let numeroAleatorio = parseInt(Math.random() * (min , max ) + min);
let intentos = 0;
let numero =  " "
let respuesta = " "

console.log(numeroAleatorio)
function Adivinar (){
    intentos++; 
    numero = document.getElementById('inputGuess').value

if(numero < numeroAleatorio){
    respuesta= ("NO ES, Intenta con un número más grande")
}

else if(numero > numeroAleatorio){
    respuesta= ("NO ES, Intenta con un número más pequeño")
}

else{
    respuesta=("¡¡Es correcto!! " + (intentos) + " intentos.")
}

document.getElementById("resultado").innerText = respuesta 

document.getElementById("titulo").innerHTML = `<h2 style="color:yellow">Diviertete adivinando</h2>`
}




