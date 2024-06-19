// creamos una variable llamada contador visitas obtuviera del localstorag el valior de visitas ó comenzara en 0
let contadorVisitas= localStorage.getItem("visitas")|| 0;
if(contadorVisitas == 0 ) {
  //crea un array vacio
  let tareas= []
  //el array lo guarda en localstorage 
  //NOTA: para subir  agregar un array debemos convertirlo a tipo JSON
  localStorage.setItem('tareas',JSON.stringify(tareas) );
}
//contadorVisitas le agregamos 1
contadorVisitas++;
//subimos al localstorage el contadorVisitas
localStorage.setItem("visitas", contadorVisitas)


//cuando la pagina se cargue completamente (DOMContentLoaded)
document.addEventListener('DOMContentLoaded',()=>{
  // llamamos los ids tareas=form entredadaTarea=input listTareas = ul
    let tareas = document.getElementById('tareas');
    let entradaTarea = document.getElementById('entradaTarea');
    let listaTareas = document.getElementById('listaTareas');
    
    //cuando le hagamos un submit a tareas=form ejecute una funcion
    tareas.addEventListener('submit', function (evento) {
      //listaTareas=ul lo de en blanco 
      listaTareas.textContent = ''

      //obtenemos el array que tenemos el localstorage y co n el JSON lo desconvertimos y se lo asignamos a la variable arrayTareas
      let arrayTareas =  JSON.parse(localStorage.getItem("tareas"))
      //con el metodo push le agregamos al array entradaTarea.value=el valor del input que tiene el formulario
      arrayTareas.push(entradaTarea.value)
      console.log(arrayTareas)
      //array lo convertimos a Json y lo subimos al localStorage
      localStorage.setItem("tareas", JSON.stringify(arrayTareas))
      //arrayTareas lo recorremos con forEach
      arrayTareas.forEach(item => {
        //aqui crea un elemento li que es una lista
        let nuevaTarea = document.createElement('li'); 
        //a nuevaTarea = li que acabamos de crear le asignemos como texto item = una tarea
        nuevaTarea.textContent = item;
        //aqui le decimos que cuando le hagamos a culla tarea ejecute una funcion 
        nuevaTarea.addEventListener('click', function () {
          this.remove(); /*que lo elimine del html */
          //llamamos el array de las tareas que tenemos en el localstorage 
          let arrayTareas =  JSON.parse(localStorage.getItem("tareas"))
          //declaramos una variable indiceTarea a la cual le agregamos un indice que lo vamos a obtener por medio del metodo del findIndex (el finIndex ejeciuta una condicion y si esa condicion se cumple me retorna el indice en la poscicion del elemento que se cumplio)
          let indiceTarea = arrayTareas.findIndex(elemento => elemento == nuevaTarea )
          //le decimos que al al arrayTareas con el metodo splice me elimine el indice indicado = indiceTarea
          arrayTareas.splice(indiceTarea)
          //agregamos el array arrayTareas al localstorage convertido a formato JSON
          localStorage.setItem("tareas", JSON.stringify(arrayTareas))
        });

        //listaTareas=ul le agregre con appenchild nuevaTarea que el li que creamos
        listaTareas.appendChild(nuevaTarea);

        entradaTarea.value = ''; /*hace que el input del form quede vacio*/  
      });
      
      evento.preventDefault();  /* si no está no se queda guardado, para que el evento no se envie vacio*/
    });
  });
  