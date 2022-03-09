import React, {useState, useEffect} from "react";
import tablas from "../modelos/estatico/tabla";

import Link from 'next/link'

export default function ConsultarObjetoMongo() {
  const [tabla,setTabla] = useState("");
  const [id,setId] = useState("");

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
      <h1>Consulta Objeto</h1>
      <label>Tipo de peticion</label>
      <select name="peticion" onChange={cambio}>
        <option value="">--Seleccione un tabla--</option>
        { opciones() }
      </select>
      {tabla !== ""? 
        (
          <div>
            <br></br>
            <Link href={"/api/solecc/"+tabla}>
              <a>Obtener Lista tabla</a>
            </Link>
            <br></br>
            <p>id: </p>
            <input name="id" value={id} onChange={({target}) => setId(target.value)}></input>
            <br></br>
            <form method="GET" action={"/api/solecc/"+tabla+"/"+id}>
              <button type="submit"> Consultar </button>
            </form>
          </div>
        ) : 
        (
          <p>Selecicone una tabla</p>
        )
      }
    </div>
  )
}