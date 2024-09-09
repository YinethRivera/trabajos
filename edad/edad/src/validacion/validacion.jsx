import React, { useState } from "react";
import "./validacion.css";

function Formulario() {
  const [valueInput, setValueInput] = useState("");
  const [coloresText, setColoresText] = useState("");
  const [respuesta, setRespuesta] = useState("");
  const [registros, setRegistros] = useState([]);

  const handleInputChange = (e) => {
    setValueInput(e.target.value);
  };

  const handleAge = (e) => {
    e.preventDefault();
    const age = parseInt(valueInput);//guardo el valor del input

    if (isNaN(age)) {
      setRespuesta("Por favor ingresa un número válido");
      return;
    }

    if (age >= 18) {
      setRespuesta("Puedes ingresar al evento");
      setColoresText("#267919");
    } else if (age >= 12 && age < 18) {
      setRespuesta("Puedes ingresar al evento con supervisión de un adulto");
      setColoresText("#d7e137");
    } else {
      setRespuesta("No puedes ingresar al evento");
      setColoresText("#e21717");
    }

   
    const nuevoRegistro = {
      id: crypto.randomUUID(), 
      age: age,
  
    };


    setRegistros([...registros, nuevoRegistro]);

    setValueInput("");
  };

  return (
    <div>
      <form onSubmit={handleAge}>
        <label>
          Ingresa tu edad:
          <input
            className="input"
            type="number"
            value={valueInput}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit" className="verificar">
          Verificar
        </button>
      </form>
      <h3 className="texto" style={{ color: coloresText }}>
        {respuesta}
      </h3>
      <div>
        <h3>Registros de Verificación:</h3>
        {registros.map((registro) => (
          <div key={registro.id}>
            <p>ID: {registro.id}</p>
            <p>Edad: {registro.age}</p>

          </div>
        ))}
      </div>
      <button className="cerrar-button">Cerrar</button>
    </div>
  );
}

export default Formulario;
