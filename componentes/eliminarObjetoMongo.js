import React, {useState, useEffect} from "react";
import tablas from "../modelos/estatico/tabla";

import Link from 'next/link'

export default function EliminarObjetoMongo() {
  const [tabla,setTabla] = useState("");
  const [id,setId] = useState("");
  const [respuesta, setRespuesta] = useState("");

  const cambio = ({ target }) => {
    setTabla(target.value);
  }
  const opciones = () => {
    return tablas.map((value) => {
      return <option value={value}>{value}</option>
    });
  }
  const click = async () => {
    if(id==""){
      setRespuesta("ID Vacio")
    }
    else{
      const res = await fetch("/api/solecc/"+tabla+"/"+id,
        { 
          method: "DELETE",
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const data = await res.json();
      setRespuesta(data);
    }
  }

  return (
    <div>
      <h1>Eliminar Objeto</h1>
      <label>Tipo de Tabla</label>
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
            <button type="button" onClick={click}> Eliminar </button>
          </div>
        ) : 
        (
          <p>Selecicone una tabla</p>
        )
      }
      <div>
        <h2>Respuesta { JSON.stringify(respuesta) }</h2>
      </div>
    </div>
  )
}