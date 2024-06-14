function convertir() {

  let cantidad = parseFloat(document.getElementById("inputCantidad").value);
  let unidadEntrada = document.getElementById("selectUnidadEntrada").value;
  let unidadSalida = document.getElementById("selectUnidadSalida").value;
  let resultado; 

  if (unidadEntrada === unidadSalida){
      resultado = cantidad;
  } else if (unidadEntrada === "km" && unidadSalida === "mi") {
      resultado = cantidad * 0.621371;
  } else if (unidadEntrada === "mi" && unidadSalida === "km") {
      resultado = cantidad * 1.60934;
  } else if (unidadEntrada === "c" && unidadSalida === "f") {
      resultado = (cantidad * 9/5) + 32;
  } else if (unidadEntrada === "f" && unidadSalida === "c") {
      resultado = (cantidad - 32) * 5/9;
  }

document.getElementById("resultado").innerText = resultado;
}