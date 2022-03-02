import React, { useState } from "react";

export default function Home() {
  const [peticion, setPeticion] = useState("DEFAULT");
  const [respuesta, setRespuesta] = useState({ peticion: "default" });
  const cambio = ({ target }) => {
    setPeticion(target.value);
  }
  const click = async () => {
    const id = (peticion!="POST")? peticion:"";
    // Fetch data from external API
    const res = await fetch('https://solecc-next.netlify.app/api/peticion/'+id,
      { method: peticion,
        headers: {
          'Content-Type': 'application/json'
        },
        body: { datos: peticion }
      }
    );
    const data = await res.json();
    // Pass data to the page via props
    setRespuesta(data);
  }
  return (
    <div>
      <h1>Formulario</h1>
      <label>Tipo de peticion</label>
      <br></br>
      <select name="peticion" onChange={cambio}>
        <option value="DEFAULT">--Seleccione un tipo formulario--</option>
        <option value="GET">GET</option>
        <option value="POST">POST</option>
        <option value="PUT">PUT</option>
        <option value="DELETE">DELETE</option>
      </select>
      <br></br>
      <button onClick={click}>enviar</button>
      <br></br>
      <h3>Peticion { peticion }</h3>
      <br></br>
      <h2>Respuesta { JSON.stringify(respuesta) }</h2>
    </div>
  )
}
