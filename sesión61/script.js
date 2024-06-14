document.addEventListener('DOMContentLoaded', function () {
  let tareas = document.getElementById('tareas');
  let entradaTarea = document.getElementById('entradaTarea');
  let listaTareas = document.getElementById('listaTareas');

  tareas.addEventListener('submit', function (evento) {
    evento.preventDefault();  /* si no está no se queda guardado, para que el evento no se envie vacio*/
    if (entradaTarea.value !== '') {
      let nuevaTarea = document.createElement('li'); 
      nuevaTarea.textContent = entradaTarea.value;
      nuevaTarea.addEventListener('click', function () {
        this.remove(); /*para eliminar la tarea con tocarla*/
      });
      listaTareas.appendChild(nuevaTarea);
      entradaTarea.value = ''; /*hace que el campo quede vacio*/
    }
  });
});



