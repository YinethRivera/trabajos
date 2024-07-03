import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ayte from "/ayte_1 (1).svg";
import "./App.css";
import Profile from "./components/profile";

function App() {
  const [count, setCount] = useState(0);
  const students = [
    {
      name: "yineth",
      img: "https://w7.pngwing.com/pngs/193/660/png-transparent-computer-icons-woman-avatar-avatar-girl-thumbnail.png",
      telephone: "3107162679",
      address: "cra5 #25B5",
      age: "21",
    },
    {
      name: "guerrero",
      img: "https://i.pinimg.com/474x/90/e1/1a/90e11a7ca20b547d9ad681bc699b80c1.jpg",
      telephone: "3107162676",
      address: "cra3 #A23",
      age: "20",
    },
    {
      name: "karina",
      img: "https://w7.pngwing.com/pngs/193/660/png-transparent-computer-icons-woman-avatar-avatar-girl-thumbnail.png",
      telephone: "3107762679",
      address: "cra 8 #30A27",
      age: "23",
    },
    {
      name: "rivera",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZLsae4Soxly0ZrKLCMTQ5V540v3MGYXZLUg&s",
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

        <p>
          ¡¡Buen dia!! Aqui puedes encontrar los nombres de Nuestras mejores
          clientas
        </p>
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
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
