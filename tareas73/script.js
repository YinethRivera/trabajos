document.addEventListener('DOMContentLoaded', function () {
    const tareas = document.getElementById('tareas');
    const tareaUsuario = document.getElementById('tareaUsuario');
    const tareasPendientes = document.getElementById('tareasPendientes');


    tareas.addEventListener('submit', function (evento) {
        evento.preventDefault();
        if (tareaUsuario.value !== '') {
            const nuevaTarea = document.createElement('li');
            nuevaTarea.textContent = tareaUsuario.value;
            nuevaTarea.style.color = "#ff0000";

            const botonCompletar = document.createElement('button');
            botonCompletar.textContent = "❌"
            botonCompletar.style.backgroundColor = "#ff0000"

            botonCompletar.addEventListener("click", function () {
                nuevaTarea.style.color = "#00ff00";
                botonCompletar.textContent = "✔"
                botonCompletar.style.backgroundColor = "#00ff00"
            })

            const botonEliminar = document.createElement('button');
            botonEliminar.textContent = "Eliminar"
            botonEliminar.style.backgroundColor = "#ffffff"

            botonEliminar.addEventListener('click', function () {
                nuevaTarea.remove()
                botonCompletar.remove()
                guardarTareas();
                this.remove();
            });

            tareasPendientes.appendChild(nuevaTarea);
            tareasPendientes.appendChild(botonCompletar);
            tareasPendientes.appendChild(botonEliminar);
            guardarTareas();
            tareaUsuario.value = '';
        }
    });

    cargarTareas();

    function cargarTareas() {
        const tareasGuardadas = JSON.parse(localStorage.getItem('tareas'));
        if (tareasGuardadas) {
            tareasGuardadas.forEach(function (tarea) {
                const nuevaTarea = document.createElement('li');
                nuevaTarea.textContent = tarea;
                nuevaTarea.addEventListener('click', function () {
                    this.remove();
                    guardarTareas();
                });
                tareasPendientes.appendChild(nuevaTarea);
            });
        }
    }

    function guardarTareas() {
        const tareas = [];
        tareasPendientes.querySelectorAll('li').forEach(function (tarea) {
            tareas.push(tarea.textContent);
        });
        localStorage.setItem('tareas', JSON.stringify(tareas));
    }
});