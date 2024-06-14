import { sumar, restar, multiplicar, dividir, potencia, raiz } from "./mathOperations.js";
import { valor, redondear} from "./utIlities.js";

const operador = document.getElementById('operador')
const result = document.getElementById('result')

function calcular(operacion) {

    const number1 = parseFloat(document.getElementById('number1').value)
    const number2 = parseFloat(document.getElementById('number2').value)

    switch (operacion) {
        case 'sumar':
            operador.textContent = '+'
            result.textContent = sumar (number1, number2)
            console.log(sumar(5, 2))
            break;

        case 'restar':
            result.textContent =restar(number1, number2)
            operador.textContent = '-'
            break;

        case 'multiplicar':
            operador.textContent = '*'
            result.textContent =multiplicar(number1, number2)
            break;

        case 'dividir':
            operador.textContent = '/'
            result.textContent =dividir(number1, number2)
            break;

        case 'potencia':
            operador.textContent = '**'
            result.textContent = potencia (number1, number2)
            break;
            
        case 'raiz':
            operador.textContent = '√'
            result.textContent = raiz (number1, number2)
            break;

        default:
            break;
    }
}
function operaciones2(operacion) {
    const number = parseFloat(document.getElementById('number').value)
    const operador2 = document.getElementById('operador2')
    const result2 = document.getElementById('result2')

    switch (operacion) {
        case 'redondear':
            operador2.textContent = '≈'
            result2.textContent = redondear (number)
            console.log(redondear())
            break; 
        case 'valor':
                operador2.textContent = '||'
                result2.textContent = valor (number)
                console.log(valor())
                break;   
    }  
}
window.operaciones2 =operaciones2
window.calcular = calcular 