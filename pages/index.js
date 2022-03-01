import React, { useState } from "react";

export default function Home() {
  const [peticion, setPeticion] = useState("");
  const [respuesta, setRespuesta] = useState({});
  const cambio = ({ target }) => {
    setPeticion(target.value);
  }
  const click = async () => {
    const res = await fetch("https://solecc-next.netlify.app/api/peticion",
      { 
        method: peticion
      }
    );
    setRespuesta(res.json());
  }
  return (
    <div>
      <h1>Formulario</h1>
      <label>Tipo de peticion</label>
      <br></br>
      <select name="peticion" onChange={cambio}>
        <option value="">--Seleccione un tipo formulario--</option>
        <option value="GET">GET</option>
        <option value="POST">POST</option>
        <option value="PUT">PUT</option>
        <option value="DELETE">DELETE</option>
      </select>
      <br></br>
      <button onClick={click}>enviar</button>
      <br></br>
      <h2>Respuesta { JSON.stringify(respuesta) }</h2>
    </div>
  )
}
