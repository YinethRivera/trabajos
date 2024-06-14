let recetas = [];
function LeerLocalstorage() {
    let recetasLocalstorage = JSON.parse(localStorage.getItem("listaRecetas"));
    let listaRecetas = document.getElementById("listaRecetas");
    let datosReceta = document.createElement("li");

    if(recetasLocalstorage != null && recetasLocalstorage != {} && recetasLocalstorage != "" && recetasLocalstorage != false && recetasLocalstorage != undefined) {
        datosReceta.innerHTML = recetasLocalstorage;
        listaRecetas.appendChild(datosReceta)
    }
}

function AgregarReceta() {
    let receta = {
        nombre: "",
        preparacion: "",
        ingredientes: {
            nombre: "",
            cantidad: ""
        }
    }


    receta.nombre = document.getElementById("nombreReceta").value;
    receta.preparacion = document.getElementById("preparacionReceta").value;
    receta.ingredientes.nombre = document.getElementById("nombreIngrediente").value;
    receta.ingredientes.cantidad = document.getElementById("cantidadIngrediente").value;
    recetas.push(receta)

    let listaRecetas = document.getElementById("listaRecetas");
    let datosReceta = document.createElement("li");
    datosReceta.innerHTML = "<b>" + receta.nombre.toUpperCase() + "</b><br/>";
    datosReceta.innerHTML += "<p>Ingredientes:</p>" + receta.ingredientes.nombre;
    datosReceta.innerHTML += receta.ingredientes.cantidad;
    datosReceta.innerHTML += "<br/><p>Preparación:</p>";

    let ingredientes = receta.preparacion.split("\n");

    datosReceta.innerHTML += "<ol>";
    for(i=0;i<ingredientes.length;i++) {
        datosReceta.innerHTML += "<li>" + ingredientes[i] + "</li>";
    }
    datosReceta.innerHTML += "<ol/>";
    datosReceta.innerHTML += "<br/>";
    listaRecetas.appendChild(datosReceta)
    localStorage.setItem("listaRecetas",JSON.stringify(listaRecetas));

    document.getElementById("nombreReceta").value = "";
    document.getElementById("preparacionReceta").value = "";
    document.getElementById("nombreIngrediente").value = "";
    document.getElementById("cantidadIngrediente").value = "";
} 
function EliminarReceta() {
    recetas.pop()

    let listaRecetas = document.getElementById("listaRecetas");
    listaRecetas.removeChild(listaRecetas.lastChild)
}

