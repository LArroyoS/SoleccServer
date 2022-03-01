import React, { useState } from "react";

export default function Home() {
  const [peticion, setPeticion] = useState("");
  const cambio = ({ target }) => {
    setPeticion(target.value);
  }
  const click = () => {
    alert("tu peticion es "+(peticion)? peticion:"Nula");
  }
  return (
    <div>
      <h1>Formulario</h1>
      <label>Tipo de peticion</label>
      <select name="peticion" onChange={cambio}>
        <option value="">--Seleccione un tipo formulario--</option>
        <option value="GET">GET</option>
        <option value="POST">GET</option>
        <option value="PUT">GET</option>
        <option value="DELETE">GET</option>
      </select>
      <button onClick={click}>enviar</button>
    </div>
  )
}
