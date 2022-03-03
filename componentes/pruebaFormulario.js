import React from "react";
import tablas from "../modelos/estatico/tablas.js";

export default function PruebaFormulario() {
  const cambio = () => {
    alert("cambio");
  }
  return (
    <div>
      <h1>Prueba Formulario</h1>
      <label>Tipo de peticion</label>
      <select name="peticion" onChange={cambio}>
        <option value="Nula">--Seleccione un tipo formulario--</option>
        <option value="GETALL">GET</option>
        <option value="GET">GET</option>
        <option value="POSTALL">POST</option>
        <option value="POST">POST</option>
        <option value="PUT">PUT</option>
        <option value="DELETE">DELETE</option>
      </select>
    </div>
  )
}