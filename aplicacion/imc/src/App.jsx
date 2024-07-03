import { useState } from 'react'
import bingLogo from './assets/Bing.svg'
import googleLogo from '/google.svg'
import './App.css'

import datos from './database/datos.json'
console.log(datos)
console.log(datos.empleado)
console.log(datos.empleado.nombre)


function App() {
  const [count, setCount] = useState(0)

  const numeros = [1, 2, 3, 4];

  const empleado = {
    "nombre": "Yineth",
    "apellido": "Rivera"
  }
  return (
    <>
      <div>
        <a href="https://www.bing.com/?setlang=es" target="_blank" onClick={() => setCount((count) => count + 1)}>
          <img src={bingLogo} className="logo" alt="bing logo" />
        </a>
        <a href="https://www.google.com/?hl=es" target="_blank" onClick={() => setCount((count) => count + 1)}>
          <img src={googleLogo} className="logo react" alt="google logo" />
        </a>
      </div>
      <h1>busca xd</h1>
    <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          numero de visitas {count}
        </button>
      
      <code>src/App.jsx</code> ¡¡Busca muy bien!!
      <p>{empleado.nombre} {empleado.apellido}</p>
      <p>{numeros[0]} {numeros[1]}</p>
      <p>{datos.empleado.nombre} {datos.empleados.apellido}</p>
    
      <p className="read-the-docs">
        Haz click en los logos para ver los buscadores
      </p>
      </div >
    </div>

  )
}

export default App
