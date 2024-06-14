let texto = document.getElementById("texto");

texto.addEventListener("mouseover", function(){
    texto.textContent = "Éste es el nuevo texto"
})

let cambiarPorClase = document.getElementsByClassName("cambiarPorClase");
console.log(cambiarPorClase)
console.log(cambiarPorClase[0])
console.log(cambiarPorClase[1])
console.log(cambiarPorClase[0].textContent)
console.log(cambiarPorClase[1].textContent)

cambiarPorClase[0].addEventListener("mouseover", function(){
    cambiarPorClase[0].textContent = "se está cambiando el primer texto utilizando clase ";
})
cambiarPorClase[1].addEventListener("mouseover", function(){
    cambiarPorClase[1].textContent = "se está cambiando el  segundo texto utilizando clase ";
})

let cambiar = document.getElementById
const anchoInicial =  document.getElementById("logo").width

let botonMas = document.getElementById("mas");
botonMas.addEventListener("click", function(){
    document.getElementById("logo").width = anchoInicial + 300;
})

let botonMenos = document.getElementById("menos");
botonMenos.addEventListener("click", function(){
    document.getElementById("logo").width = anchoInicial - 300;
})

let botonIgual = document.getElementById("igual");
botonIgual.addEventListener("click", function(){
    document.getElementById("logo").width = anchoInicial;
})
