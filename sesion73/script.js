let contadorVisitas = localStorage.getItem("visitas") || 0;
if (contadorVisitas == 0) {
  let tareas = []
  localStorage.setItem('tareas', JSON.stringify(tareas));
}
contadorVisitas++;
localStorage.setItem("visitas", contadorVisitas)
let tareas = document.getElementById('tareas');
let entradaTarea = document.getElementById('entradaTarea');
let listaTareas = document.getElementById('listaTareas');
tareas.addEventListener('submit', () => {
  listaTareas.textContent = ''
  let arrayTareas = JSON.parse(localStorage.getItem("tareas"))
  arrayTareas.push(entradaTarea.value)
  let arrayTareasNoRepeat = [...new Set(arrayTareas)]
  MostrarTareas()
  localStorage.setItem("tareas", JSON.stringify(arrayTareasNoRepeat))
});
function MostrarTareas() {
  let listaTareas = document.getElementById('listaTareas');
  JSON.parse(localStorage.getItem("tareas")).forEach(item => {
    let nuevaTarea = document.createElement('li');
    nuevaTarea.classList.add('completa')
    nuevaTarea.textContent = item;
    mostrarRojo(nuevaTarea)
    // nuevaTarea.addEventListener('click', () => {
    // nuevaTarea.classList.add('incompleta')
    // nuevaTarea.classList.remove('completa')
    //   // nuevaTarea.remove();





    //   let arrayTareas = JSON.parse(localStorage.getItem("tareas"))
    //   let indiceTarea = arrayTareas.findIndex(elemento => elemento == nuevaTarea)
    //   arrayTareas.splice(indiceTarea)
    //   localStorage.setItem("tareas", JSON.stringify(arrayTareas))
    //   nuevaTarea.addEventListener('click', () => {
    //     nuevaTarea.classList.add('completa')
    //     nuevaTarea.classList.remove('incompleta')
    //   })
    // });
    listaTareas.appendChild(nuevaTarea);
  });
}
document.addEventListener('DOMContentLoaded', MostrarTareas())
function mostrarRojo (nuevaTarea){
  nuevaTarea.classList.add('incompleta')
  nuevaTarea.classList.remove('completa')
nuevaTarea.addEventListener('click', () => {
  mostrarVerde (nuevaTarea)
      })
}
function mostrarVerde (nuevaTarea){
  nuevaTarea.classList.add('completa')
  nuevaTarea.classList.remove('incompleta')
  nuevaTarea.addEventListener('click', () => {
    mostrarRojo(nuevaTarea)
  })
}