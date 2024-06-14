document.addEventListener("DOMContentLoaded", function() {
    // Agregar listener para el botón de agregar ingrediente
    document.getElementById("agregarIngrediente").addEventListener("click", agregarIngrediente);

    // Agregar listener para el formulario de receta
    document.getElementById("formaReceta").addEventListener("submit", guardarReceta);

    // Agregar listeners para eliminar recetas
    let listaRecetas = document.getElementById("recipe-list");
    listaRecetas.addEventListener("click", function(event) {
        if (event.target.classList.contains("eliminarReceta")) {
            eliminarReceta(event.target.parentElement);
        }
    });
});

function agregarIngrediente() {
    // Crear elementos de input para el nuevo ingrediente
    let divIngredientes = document.createElement("div");
    divIngredientes.classList.add("ingredientes");

    let inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.classList.add("nombreIngrediente");
    inputNombre.placeholder = "Ingrediente";
    inputNombre.required = true;

    let inputCantidad = document.createElement("input");
    inputCantidad.type = "text";
    inputCantidad.classList.add("cantidadIngrediente");
    inputCantidad.placeholder = "Cantidad";
    inputCantidad.required = true;

    // Agregar los inputs al div de ingredientes
    divIngredientes.appendChild(inputNombre);
    divIngredientes.appendChild(inputCantidad);

    // Obtener el contenedor de la lista de ingredientes y agregar el nuevo ingrediente
    let listaIngredientes = document.querySelector(".listaIngredientes");
    listaIngredientes.appendChild(divIngredientes);
}

function guardarReceta(event) {
    event.preventDefault(); // Evitar que se envíe el formulario

    // Obtener los valores del formulario
    let nombreReceta = document.getElementById("nombreReceta").value;
    let preparacionReceta = document.getElementById("preparacionReceta").value;
    let listaIngredientes = [];

    // Recorrer todos los elementos de ingredientes
    document.querySelectorAll(".ingredientes").forEach(function(ingrediente) {
        let nombreIngrediente = ingrediente.querySelector(".nombreIngrediente").value;
        let cantidadIngrediente = ingrediente.querySelector(".cantidadIngrediente").value;
        
        // Verificar que se hayan ingresado ambos valores
        if (nombreIngrediente && cantidadIngrediente) {
            listaIngredientes.push({
                nombre: nombreIngrediente,
                cantidad: cantidadIngrediente
            });
        }
    });

    // Crear un objeto con los datos de la receta
    let receta = {
        nombre: nombreReceta,
        preparacion: preparacionReceta,
        ingredientes: listaIngredientes
    };

    // Agregar la receta a la lista de recetas en la vista previa
    mostrarRecetaEnVistaPrevia(receta);

    // Limpiar el formulario después de guardar la receta
    limpiarFormulario();
}

function mostrarRecetaEnVistaPrevia(receta) {
    // Crear elementos HTML para mostrar la receta en la vista previa
    let recetaHTML = document.createElement("div");
    recetaHTML.classList.add("receta");

    let nombreRecetaHTML = document.createElement("h3");
    nombreRecetaHTML.textContent = receta.nombre;

    let preparacionRecetaHTML = document.createElement("p");
    preparacionRecetaHTML.textContent = "Preparación: " + receta.preparacion;

    let listaIngredientesHTML = document.createElement("ul");
    receta.ingredientes.forEach(function(ingrediente) {
        var ingredienteHTML = document.createElement("li");
        ingredienteHTML.textContent = ingrediente.nombre + ": " + ingrediente.cantidad;
        listaIngredientesHTML.appendChild(ingredienteHTML);
    });
    
    // Crear un botón para eliminar la receta
    let btnEliminarReceta = document.createElement("button");
    btnEliminarReceta.textContent = "Eliminar Receta";
    btnEliminarReceta.classList.add("eliminarReceta");

    // Agregar elementos HTML al contenedor de la lista de recetas
    recetaHTML.appendChild(nombreRecetaHTML);
    recetaHTML.appendChild(preparacionRecetaHTML);
    recetaHTML.appendChild(listaIngredientesHTML);
    recetaHTML.appendChild(btnEliminarReceta);
   
    // Obtener el contenedor de la lista de recetas y agregar la nueva receta
    let listaRecetas = document.getElementById("recipe-list");
    listaRecetas.appendChild(recetaHTML);
}

function eliminarReceta(receta) {
    receta.remove();
}

function limpiarFormulario() {
    document.getElementById("nombreReceta").value = "";
    document.getElementById("preparacionReceta").value = "";
    document.querySelectorAll(".ingredientes").forEach(function(ingrediente) {
        ingrediente.parentNode.removeChild(ingrediente);
    });
}
