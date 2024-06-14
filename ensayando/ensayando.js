var resultado = 0
var historial = []
var historial_total = ''
function calcular_suma(){
    let num1 = parseFloat(document.getElementById('numero1').value)
    let num2 = parseFloat(document.getElementById('numero2').value)
    // console.log(num1)
    // console.log(num2)
    resultado = parseFloat(num1 + num2)
    document.getElementById('resultado').innerText =resultado
    
}

function guardar_historial(){
    historial.push(resultado)
    // console.log(historial)
    // console.log(resultado)
    localStorage.setItem('historia', JSON.stringify(historial))
    document.getElementById('resultado').innerText = 'guardado'
}

function mostrar_historial (){
    let historial_recuperado = JSON.parse(localStorage.getItem('historia'))
    document.getElementById('historial_resultado').innerText = historial_recuperado.join('_-_')
}