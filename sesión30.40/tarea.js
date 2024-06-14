let tareas = [{
    titulo: 'tarea1',
    descripcionTarea: 'realizar el aseo',
    estadoTarea: false
  }
]

function agregarTarea(tituloF,descripcion) {
    tareas.push({titulo:tituloF,descripcionTarea:descripcion,estadoTarea:false})
    console.log("Tarea agregada")
}
function mostrarTareas() {
    tareas.forEach((item, index) =>
        console.log(` ${index +1} - titulo de la tarea: ${item.titulo},\n descripcion: ${item.descripcionTarea}, \n estado: ${item.estadoTarea ? 'Tarea completa':'Tarea incompleta' }`))
}
function completarTareas(){
    let numTarea = parseInt(prompt("ingrese el numero dela tarea que deseas completar"))
    numTarea -= 1
    let tareaCompletar = tareas[numTarea]
    if (tareaCompletar == undefined){
        console.log("tarea no encontrada")
    }else{
        if (tareaCompletar.estadoTrea == true){
            console.log("tarea ya completada")
        }else{

    tareaCompletar.estadoTarea = true
    console.log ("tarea" + tareaCompletar.titulo + "completa")
        }
}}
let continuar = true
while(continuar) {
    let operacion = prompt("Ingresar el numero de la operacion que deseas realizar: \n1:agregar tarea, \n2:mostrar todas las tareas, \n3:completar tareas, \n4:salir. ")

    switch (operacion) {
        case "1":
            let tituloTarea = prompt("ingrese el titulo de la tarea: ");
            let descripcionTarea = prompt("ingrese la descripcion de la tarea: ")
            agregarTarea(tituloTarea,descripcionTarea)
            break;
        case "2":
            mostrarTareas()
            break
        case "3":
             completarTreas()
            break;
        case "4":
            break
        default:
            console.log("Operación inválida.")
    }
}