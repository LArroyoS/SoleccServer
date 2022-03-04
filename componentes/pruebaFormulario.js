import React, {useState} from "react";
import tablas from "../modelos/estatico/tabla";
import modelo from "../modelos/estatico/modelo";
import form from "../modelos/estatico/form";

export default function PruebaFormulario() {
  const [tabla,setTabla] = useState("");
  const cambio = ({ target }) => {
    setTabla(target.value);
  }
  const opciones = () => {
    return tablas.map((value) => {
      return <option value={value}>{value}</option>
    });
  }
  return (
    <div>
      <h1>Prueba Formulario</h1>
      <label>Tipo de peticion</label>
      <select name="peticion" onChange={cambio}>
        <option value="">--Seleccione un tabla--</option>
        { opciones() }
      </select>
      <h4>tabla: { tabla }</h4>
    </div>
  )
}