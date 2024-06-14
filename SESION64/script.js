// 1:
const boton = document.getElementById("boton");

boton.addEventListener("click", function(){
document.body.style.backgroundColor = "red";

})

// 2
const buton = document.getElementById("buton");
buton.addEventListener("click", function (){

    const texto = document.getElementById("cambiar")
    if(texto.style.display=="none"){
        texto.style.display = "block"
        buton.textContent = "OCULTAR TEXTO"
    }
    else {
        texto.style.display = "none"
        buton.textContent = "MOSTRAR TEXTO"
    }
})  


// 3
let abuela = document.getElementById("abuela")
let mama = document.getElementById("mama")
let hija = document.getElementById("hija")

abuela.addEventListener("click", function(evento){
    alert("evento: "+ evento.currentTarget.id)

}
)
mama.addEventListener("click", function(evento){
    alert("evento: "+ evento.currentTarget.id)

}
)
hija.addEventListener("click", function(evento){
    alert("evento: "+ evento.currentTarget.id)

})


// 4
let formulario = document.getElementById("Registro");
formulario.addEventListener("submit", (eventos) => {
  eventos.preventDefault();
  let nombre = document.getElementById("nombre");
  let apellido = document.getElementById("Apellido");
  let email = document.getElementById("Email");

  fetch("https://jsonplaceholder.typicode.com/users&quot",{
    method: "post",
    body : JSON.stringify({
      nombre: nombre,
      apellido: apellido,
      email: email,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      alert("Usuario registrado");
    });
});
