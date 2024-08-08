import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ayteLogo from '/ayte_1.svg'
import Profile from './components/Profile'
import './App.css'
import ListPeople from './components/ListPeople'


const sebastian = {
  name: 'sebastian',
  lastName: 'Quinayas',
  age: '21'
}

const students = [
  {
    name: 'Sebastian',
    img: 'https://images.generated.photos/3ihy_0Px4_i3QIX1C7CKhwoyVMBGYgWo6BapiWPutEQ/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjA3NjM2LmpwZw.jpg',
    telephone: '31154684',
    address: 'Cra 34 # 78 80',
    age: 22
  },
  {
    name: 'Nicol',
    img: 'https://images.generated.photos/w6sm_W9-P4L6uq4PZgbWbRAjpMs4i20zFhTR7OdZvwY/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDU4MjI1LmpwZw.jpg',
    telephone: '3215447898',
    age: 17
  },
  {
    name: 'Yineth',
    img: 'https://images.generated.photos/I-8vtUEQuFUEGufmOWkf6j5RvJNZ1L1EwBvEJkCMWxQ/rs:fit:512:512/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjE3ODcyLmpwZw.jpg',
    telephone: '31245635',
    age: 21
  },
  {
    name: 'María',
    img: 'https://images.generated.photos/M9OYXAyCE4n45d0URzVlI5QjzPFynMbbLC-YNi5UTfY/rs:fit:512:512/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODY2NjU5LmpwZw.jpg',
    telephone: '3238791544',
    address: '123 Main St',
    age: 21
  },
  {
    name: 'Eider',
    img: 'https://images.generated.photos/qtM6F5RVs4lrwunkkwHMUltMvB-mcSqh9hpgL6ydf60/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTAxMTgzLmpwZw.jpg',
    telephone: '321544894',
    age: 17
  },
  {
    name: 'Cristhian',
    img: 'https://images.generated.photos/rLxFEbpzs8d8VDNZ5Gob57cTXEYkCGpht5tnd9xRT7M/rs:fit:512:512/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTU1NzcxLmpwZw.jpg',
    telephone: '321789684',
    age: 23
  },
]

function getRandomPerson(customArray) {
  const randomIndex = Math.floor(Math.random() * customArray.length)
  return customArray[randomIndex]
}

export default function App() {
  const [count, setCount] = useState(0)
  const [persona, setPersona] = useState({})

  return (
    <>
      {/* <div>
        <h1>Nombre: {sebastian.name}</h1>
        <p>Apellido: {sebastian.lastName}</p>
        <p>Edad: {sebastian.age}</p>
      </div> */}
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="">
          <img src={ayteLogo} className="logo ayte" alt="Ayte logo" />
        </a>
      </div> */}
      <h1>Uso de useState</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Incrementar
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          Decrementar
        </button>
        <button onClick={() => setCount(0)}>
          Restablecer
        </button>
        <p>
          El valor del contador es: {count}
        </p>
      </div>
      <button onClick={() => setPersona(getRandomPerson(students))}>
        Cambiar invitado
      </button>
      <p className="read-the-docs">
        Tenemos a la persona invitada de hoy:
      </p>
      <Profile
        name={persona.name}
        img={persona.img}
        telephone={persona.telephone}
        age={persona.age}
        address={persona.address} />

      {/* <ListPeople>
          {
            students.map((student) => <Profile
              name={student.name}
              img={student.img}
              telephone={student.telephone}
              age={student.age}
              address={student.address} />)
          }
        </ListPeople> */}

    </>
  )
}

 1 change: 1 addition & 0 deletions1  
s