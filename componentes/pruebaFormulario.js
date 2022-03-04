import React from "react";
import tablas from "../modelos/estatico/tabla";
import modelo from "../modelos/estatico/modelo";
import form from "../modelos/estatico/form";

export default function PruebaFormulario() {
  const cambio = () => {
    alert("cambio");
  }
  const opciones = () => {
    return modelo.map((value,index) => {
      return <opcion value={value}>{value}</opcion>
    });
  }
  return (
    <div>
      <h1>Prueba Formulario</h1>
      <label>Tipo de peticion</label>
      <select name="peticion" onChange={cambio}>
        <option value="Nula">--Seleccione un tabla--</option>
        { opciones() }
      </select>
      <h4>tablas: { JSON.stringify(tablas) }</h4>
      <h4>modelo: { JSON.stringify(modelo) }</h4>
      <h4>formularios: { JSON.stringify(form) }</h4>
    </div>
  )
}