import React, { useState, useEffect } from "react";
import Agregar from "../componentes/formulario";
import * as Tablas from "../modelos/estaticos/tablas";

export default function VerFormulario() {
  const [select, setSelect] = useState([]);
  const [tabla, setTabla] = useState("");

  useEffect(() => {
    setSelect(Tablas.tablas);
  },[tabla]);

  const opcionesTablas = () => {
    return select.map((value) => {
      return <option key={value} value={value}>{value}</option>;
    });
  };

  return (
    <div className="App">
      <select onChange={(change) => setTabla(change.target.value)}>
        <option value="">--Seleccione Tabla--</option>
        {opcionesTablas()}
      </select>
      <Agregar tabla={tabla} />
    </div>
  );
}