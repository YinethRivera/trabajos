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
    respuesta= ("NO es, Intenta con un número más grande")
}


else if(numero > numeroAleatorio){
    respuesta= ("NO es, Intenta con un número más pequeño")
}


else{
    respuesta=("¡¡Es correcto!! " + (intentos) + " intentos.")
}


document.getElementById("resultado").innerText = respuesta
document.getElementById("resultado1").innerHTML = '<h1>'+ respuesta+'</h1>'
}
