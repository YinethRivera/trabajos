import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ayte from "/ayte_1 (1).svg";
import "./App.css";
import Profile from "./components/profile";

function getRamdomPerson(customArray) {
  const ramdonIndex = Math.floor(Math.random() * customArray.length)

  return customArray[ramdonIndex].name
}

function App() {
  const [count, setCount] = useState(0);
  const [persona, setPersona] = useState('Maria');

  const sebastian = {
  name: 'sebastian',
  lastName: 'Quinayas',
  age: '21'
}


  const students = [
    {
      name: "yineth",
      img: "https://pm1.aminoapps.com/6264/457f17862f0d98a2c107e6dbe3b67e06c606d113_00.jpg",
      telephone: "3107162679",
      address: "cra5 #25B5",
      age: "21",
    },
    {
      name: "Maria",
      img: "https://i.pinimg.com/564x/8f/bf/f6/8fbff66bfd8ca61c67ace308550800d8.jpg",
      telephone: "3107162676",
      address: "cra3 #A23",
      age: "20",
    },
    {
      name: "Andres",
      img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Andres_Bello-Quinsac.jpg",
      telephone: "3107762679",
      address: "cra 8 #30A27",
      age: "23",
    },
    {
      name: "Jhon",
      img: "https://i.blogs.es/53190a/ts-1/450_1000.jpg",
      telephone: "3103162671",
      address: "cra5 #4A3",
      age: "22",
    },
    {
      name: "nicole",
      img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cf4c6c23-e340-45da-abcf-c2d373f1eb5a/dcz9m24-fa8cb481-42ef-4cd6-8810-6927c88cad87.png/v1/fill/w_736,h_1086/kid_nicole_watterson_by_nickon775_dcz9m24-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzMwMyIsInBhdGgiOiJcL2ZcL2NmNGM2YzIzLWUzNDAtNDVkYS1hYmNmLWMyZDM3M2YxZWI1YVwvZGN6OW0yNC1mYThjYjQ4MS00MmVmLTRjZDYtODgxMC02OTI3Yzg4Y2FkODcucG5nIiwid2lkdGgiOiI8PTIyMzkifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.cnzYz_iXvLdldff2LHc_hLO6ngwI3EBTic6xxxbghrw",
      telephone: "3103162671",
      address: "cra5 #4A3",
      age: "22",
    },
    {
      name: "Cris",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEPdiAGM66N_nt5DaYptUPwCzEnLB7M_63Ew&s",
      telephone: "3103162671",
      address: "cra5 #4A3",
      age: "22",
    },
  ];

  return (
    <>
      <div>
        {students.map((student) => (
          <Profile
            name={student.name}
            img={student.img}
            telephone={student.telephone}
            age={student.age}
            address={student.address}
          />
        ))}
        <h1>Nombre: {sebastian.name}</h1>
        <p>Apellido: {sebastian.lastName}</p>
        <p>Edad: {sebastian.age}</p>
      </div>

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="#" target="_blank">
          <img src={ayte} className="logo ayte" alt="ayte logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          INCREMENTAR
        </button>

        <button onClick={() => setCount((count) => count - 1)}>
          DECREMENTAR
        </button>
        <button onClick={() => setCount(0)}>REINICIAR</button>
      </div>
      <p>El valor del contador: {count}</p>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <button onClick={() => setPersona(getRamdomPerson(students))}>
        CAMBIAR INVITADO
      </button>

      <p>La persona invitada: {persona}</p>
    </>
  );
}

export default App;
